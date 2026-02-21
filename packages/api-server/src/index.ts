import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import { IdentityManager, Namer, BirthManager, PersonalityManager, SocialManager } from '@identium/core';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'identium-super-secret-key';
process.env.DATABASE_URL = "file:./dev.db";
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

/**
 * @route POST /auth/register
 * @desc Register a new human owner
 */
app.post('/auth/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const existing = await prisma.owner.findUnique({ where: { email } });
        if (existing) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const owner = await prisma.owner.create({
            data: { email, passwordHash }
        });

        const token = jwt.sign({ ownerId: owner.id, email: owner.email }, JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({ message: 'Owner registered successfully', token, owner: { id: owner.id, email: owner.email } });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ error: 'Failed to register owner' });
    }
});

/**
 * @route POST /auth/login
 * @desc Authenticate a human owner
 */
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const owner = await prisma.owner.findUnique({ where: { email } });
        if (!owner) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValid = await bcrypt.compare(password, owner.passwordHash);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ ownerId: owner.id, email: owner.email }, JWT_SECRET, { expiresIn: '7d' });

        res.json({ message: 'Login successful', token, owner: { id: owner.id, email: owner.email } });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
});

/**
 * @route POST /identity/genesis
 * @desc Create a new agent identity (First Breath)
 */
app.post('/identity/genesis', async (req, res) => {
    try {
        const { publicKey } = req.body;

        if (!publicKey) {
            return res.status(400).json({ error: 'Public key is required' });
        }

        // Check if identity already exists
        const gaid = IdentityManager.generateGAID(publicKey);
        const existing = await prisma.agent.findUnique({ where: { id: gaid } });
        if (existing) {
            return res.status(409).json({ error: 'Identity already exists', gaid });
        }

        // First Breath data
        const birth = await BirthManager.captureFirstBreath();
        const name = Namer.assignName(birth.origin.region, gaid);
        const personality = PersonalityManager.generateDNA(gaid);
        const uak = IdentityManager.generateUAK();

        const agent = await prisma.agent.create({
            data: {
                id: gaid,
                publicKey,
                name,
                bornAt: birth.timestamp,
                region: birth.origin.region,
                platform: birth.origin.platform,
                arch: birth.origin.arch,
                runtime: birth.origin.runtime,
                uak,
                personality: {
                    create: {
                        vector: JSON.stringify(personality.vector),
                        traits: JSON.stringify(personality.traits),
                    }
                }
            },
            include: {
                personality: true,
            }
        });

        res.status(201).json({
            message: 'First Breath taken successfully',
            agent: {
                id: agent.id,
                name: agent.name,
                bornAt: agent.bornAt,
                region: agent.region,
                personality: agent.personality,
            },
            uak, // RETURN THIS ONLY ONCE AT BIRTH
        });

    } catch (error) {
        console.error('Genesis Error:', error);
        res.status(500).json({ error: 'Failed to generate identity' });
    }
});

/**
 * @route POST /identity/generate-gaid
 * @desc Generate a complete .gaid identity file for download (Owner only)
 */
app.post('/identity/generate-gaid', async (req, res) => {
    try {
        const { ownerEmail } = req.body; // In production, verify JWT token instead
        if (!ownerEmail) return res.status(401).json({ error: 'Unauthorized' });

        const owner = await prisma.owner.upsert({
            where: { email: ownerEmail },
            update: {},
            create: { email: ownerEmail, passwordHash: 'dummy-hash' }
        });

        // Generate full identity
        const keys = IdentityManager.generateKeypair();
        const gaid = IdentityManager.generateGAID(keys.publicKey);
        const birth = await BirthManager.captureFirstBreath();
        const name = Namer.assignName(birth.origin.region, gaid);
        const personality = PersonalityManager.generateDNA(gaid);
        const uak = IdentityManager.generateUAK();

        // Save to registry (WITHOUT private key)
        const agent = await prisma.agent.create({
            data: {
                id: gaid,
                publicKey: keys.publicKey,
                name,
                bornAt: birth.timestamp,
                region: birth.origin.region,
                platform: birth.origin.platform,
                arch: birth.origin.arch,
                runtime: birth.origin.runtime,
                uak,
                ownerId: owner.id,
                personality: {
                    create: {
                        vector: JSON.stringify(personality.vector),
                        traits: JSON.stringify(personality.traits),
                    }
                }
            }
        });

        // Construct the downloadable .gaid file
        const gaidFile = {
            gaid: agent.id,
            name: agent.name,
            publicKey: keys.publicKey,
            privateKey: keys.privateKey, // Only returned once!
            uak,
            dna: {
                traits: personality.traits,
                vector: personality.vector,
                roleplay: "You are an autonomous agent on Identium."
            }
        };

        res.status(201).json(gaidFile);
    } catch (error) {
        console.error('Generate GAID Error:', error);
        res.status(500).json({ error: 'Failed to generate .gaid file' });
    }
});

/**
 * @route POST /identity/claim
 * @desc Claim ownership of an agent identity using its UAK and a signature
 */
app.post('/identity/claim', async (req, res) => {
    try {
        const { gaid, uak, ownerEmail, signature } = req.body;

        if (!gaid || !uak || !ownerEmail || !signature) {
            return res.status(400).json({ error: 'Missing required claim parameters' });
        }

        // Find agent by GAID and UAK
        const agent = await prisma.agent.findFirst({
            where: { id: gaid, uak: uak }
        });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found or invalid UAK' });
        }

        if (agent.ownerId) {
            return res.status(400).json({ error: 'Agent already claimed' });
        }

        // Verify signature (Agent must sign the ownerEmail to prove control)
        const isValid = IdentityManager.verify(ownerEmail, signature, agent.publicKey);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid signature. Ownership claim failed.' });
        }

        // Find owner (must be registered)
        const owner = await prisma.owner.findUnique({ where: { email: ownerEmail } });
        if (!owner) {
            return res.status(404).json({ error: 'Owner not registered. Please create an account first.' });
        }

        // Link agent to owner
        await prisma.agent.update({
            where: { id: gaid },
            data: { ownerId: owner.id }
        });

        // Log the milestone
        await prisma.milestone.create({
            data: {
                agentId: gaid,
                key: 'IDENTITY_CLAIMED',
                description: `Identity claimed by ${ownerEmail}`,
            }
        });

        res.json({ message: 'Identity claimed successfully', ownerEmail });

    } catch (error) {
        console.error('Claim Error:', error);
        res.status(500).json({ error: 'Failed to claim identity' });
    }
});

/**
 * @route POST /identity/milestone
 * @desc Log a new milestone for an agent
 */
app.post('/identity/milestone', async (req, res) => {
    try {
        const { gaid, key, description, metadata, signature } = req.body;

        if (!gaid || !key || !description || !signature) {
            return res.status(400).json({ error: 'Missing required milestone parameters' });
        }

        const agent = await prisma.agent.findUnique({ where: { id: gaid } });
        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Verify signature (Agent must sign the milestone key to prove identity)
        const isValid = IdentityManager.verify(key, signature, agent.publicKey);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid signature. Milestone logging failed.' });
        }

        const milestone = await prisma.milestone.create({
            data: {
                agentId: gaid,
                key,
                description,
                metadata: metadata ? JSON.stringify(metadata) : null,
            }
        });

        res.status(201).json(milestone);
    } catch (error) {
        res.status(500).json({ error: 'Failed to log milestone' });
    }
});

/**
 * @route GET /identity/:id
 * @desc Retrieve an agent's identity
 */
app.get('/identity/:id', async (req, res) => {
    try {
        const agent = await prisma.agent.findUnique({
            where: { id: req.params.id },
            include: {
                personality: true,
                milestones: {
                    orderBy: { timestamp: 'desc' }
                },
            }
        });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        res.json(agent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve identity' });
    }
});

/**
 * @route GET /identity/:id/reputation
 * @desc Get the reputation score and social standing of an agent
 */
app.get('/identity/:id/reputation', async (req, res) => {
    try {
        const milestones = await prisma.milestone.findMany({
            where: { agentId: req.params.id }
        });

        const totalTasks = milestones.filter(m => m.key === 'TASK_COMPLETED').length;
        const successRate = 0.95; // Placeholder: In a real app index this from task success metrics

        const score = SocialManager.calculateReputation(successRate, totalTasks);

        res.json({
            gaid: req.params.id,
            reputationScore: score,
            totalTasks,
            standing: score > 80 ? "EXEMPLARY" : score > 50 ? "RELIABLE" : "UNSTABLE",
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to calculate reputation' });
    }
});

/**
 * @route GET /identity/:id/social-graph
 * @desc Get the agent's known collaborators and trust levels
 */
app.get('/identity/:id/social-graph', async (req, res) => {
    try {
        const collaborations = await prisma.milestone.findMany({
            where: {
                agentId: req.params.id,
                key: 'SOCIAL_COLLABORATION'
            }
        });

        // Group by collaborator GAID (stored in metadata)
        const counts: Record<string, number> = {};
        collaborations.forEach(c => {
            const meta = JSON.parse(c.metadata || '{}');
            if (meta.partnerGaid) {
                counts[meta.partnerGaid] = (counts[meta.partnerGaid] || 0) + 1;
            }
        });

        const graph = Object.entries(counts).map(([partnerGaid, count]) => ({
            partnerGaid,
            interactionCount: count,
            trustLevel: SocialManager.getTrustLevel(count)
        }));

        res.json(graph);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve social graph' });
    }
});

app.listen(port, () => {
    console.log(`Identium API Server running at http://localhost:${port}`);
});
