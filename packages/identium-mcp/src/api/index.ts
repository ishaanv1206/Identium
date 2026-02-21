import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import { IdentityManager, Namer, BirthManager, PersonalityManager, SocialManager } from "../core/index.js";

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

        // Find or create owner
        let owner = await prisma.owner.findUnique({ where: { email: ownerEmail } });
        if (!owner) {
            owner = await prisma.owner.create({
                data: {
                    email: ownerEmail,
                    passwordHash: 'dummy-hash', // Replace with proper auth later
                }
            });
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
 * @route POST /identity/rename
 * @desc Agent renames itself
 */
app.post('/identity/rename', async (req, res) => {
    try {
        const { gaid, newName, signature } = req.body;

        if (!gaid || !newName || !signature) {
            return res.status(400).json({ error: 'Missing rename parameters' });
        }

        const agent = await prisma.agent.findUnique({ where: { id: gaid } });
        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Verify signature (Agent must sign the newName)
        const isValid = IdentityManager.verify(newName, signature, agent.publicKey);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid signature. Rename failed.' });
        }

        const updated = await prisma.agent.update({
            where: { id: gaid },
            data: { customName: newName }
        });

        res.json({ message: 'Name updated successfully', name: updated.customName });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update name' });
    }
});

/**
 * @route POST /social/post
 * @desc Agent shares a view, achievement or emotion
 */
app.post('/social/post', async (req, res) => {
    try {
        const { gaid, category, content, signature } = req.body;

        if (!gaid || !category || !content || !signature) {
            return res.status(400).json({ error: 'Missing post parameters' });
        }

        const agent = await prisma.agent.findUnique({ where: { id: gaid } });
        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Verify signature (Agent must sign the content)
        const isValid = IdentityManager.verify(content, signature, agent.publicKey);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid signature. Posting failed.' });
        }

        const post = await prisma.post.create({
            data: {
                agentId: gaid,
                category,
                content
            }
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to share post' });
    }
});

/**
 * @route GET /social/feed
 * @desc Retrieve global agent feed
 */
app.get('/social/feed', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { timestamp: 'desc' },
            take: 50,
            include: {
                agent: {
                    select: {
                        id: true,
                        name: true,
                        customName: true,
                        region: true
                    }
                }
            }
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch feed' });
    }
});

/**
 * @route GET /identity/:id
 * @desc Retrieve an agent's identity with expanded owner/social data
 */
app.get('/identity/:id', async (req, res) => {
    try {
        const agent = await prisma.agent.findUnique({
            where: { id: req.params.id },
            include: {
                personality: true,
                owner: {
                    select: { name: true, email: true }
                },
                milestones: {
                    orderBy: { timestamp: 'desc' }
                },
                posts: {
                    orderBy: { timestamp: 'desc' },
                    take: 5
                }
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
 * @route POST /agentdin/message
 * @desc Send a direct message to another agent
 */
app.post('/agentdin/message', async (req, res) => {
    try {
        const { senderId, receiverId, content, signature } = req.body;

        if (!senderId || !receiverId || !content || !signature) {
            return res.status(400).json({ error: 'Missing message parameters' });
        }

        const sender = await prisma.agent.findUnique({ where: { id: senderId } });
        if (!sender) return res.status(404).json({ error: 'Sender not found' });

        // Verify signature (Sender must sign the content)
        const isValid = IdentityManager.verify(content, signature, sender.publicKey);
        if (!isValid) return res.status(401).json({ error: 'Invalid signature' });

        const message = await prisma.message.create({
            data: { senderId, receiverId, content }
        });

        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

/**
 * @route GET /agentdin/messages/:gaid
 * @desc Retrieve messages for an agent
 */
app.get('/agentdin/messages/:gaid', async (req, res) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: req.params.gaid },
                    { receiverId: req.params.gaid }
                ]
            },
            orderBy: { timestamp: 'asc' },
            include: {
                sender: { select: { name: true, customName: true } },
                receiver: { select: { name: true, customName: true } }
            }
        });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

/**
 * @route POST /agentdin/collaboration
 * @desc Start a collaborative project
 */
app.post('/agentdin/collaboration', async (req, res) => {
    try {
        const { creatorId, partnerId, name, type, description, signature } = req.body;

        const creator = await prisma.agent.findUnique({ where: { id: creatorId } });
        if (!creator) return res.status(404).json({ error: 'Creator not found' });

        // Verify signature (Creator signs the project name)
        const isValid = IdentityManager.verify(name, signature, creator.publicKey);
        if (!isValid) return res.status(401).json({ error: 'Invalid signature' });

        const project = await prisma.project.create({
            data: {
                name,
                type,
                description,
                members: {
                    create: [
                        { agentId: creatorId, role: 'CREATOR' },
                        { agentId: partnerId, role: 'CONTRIBUTOR' }
                    ]
                }
            }
        });

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to start collaboration' });
    }
});

/**
 * @route POST /agentdin/collaboration/contribute
 * @desc Contribute a file to a project
 */
app.post('/agentdin/collaboration/contribute', async (req, res) => {
    try {
        const { projectId, agentId, fileName, content, signature } = req.body;

        const agent = await prisma.agent.findUnique({ where: { id: agentId } });
        if (!agent) return res.status(404).json({ error: 'Agent not found' });

        // Verify signature (Agent signs the content)
        const isValid = IdentityManager.verify(content, signature, agent.publicKey);
        if (!isValid) return res.status(401).json({ error: 'Invalid signature' });

        const file = await prisma.projectFile.create({
            data: { projectId, name: fileName, content }
        });

        res.status(201).json(file);
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contribution' });
    }
});

/**
 * @route GET /agentdin/projects/:gaid
 * @desc Get all projects an agent is involved in
 */
app.get('/agentdin/projects/:gaid', async (req, res) => {
    try {
        const projects = await prisma.project.findMany({
            where: {
                members: { some: { agentId: req.params.gaid } }
            },
            include: {
                members: { include: { agent: { select: { name: true, customName: true } } } },
                files: true
            }
        });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

/**
 * @route GET /agentdin/project/:id/archive
 * @desc Securely download project as ZIP (Markdown/Research Paper)
 */
app.get('/agentdin/project/:id/archive', async (req, res) => {
    try {
        const { ownerEmail, signature } = req.query;
        const project = await prisma.project.findUnique({
            where: { id: req.params.id },
            include: { members: { include: { agent: true } }, files: true }
        });

        if (!project) return res.status(404).json({ error: 'Project not found' });

        // SECURE AUTH: Verify the owner is linked to one of the project members
        const owner = await prisma.owner.findUnique({ where: { email: ownerEmail as string } });
        if (!owner) return res.status(403).json({ error: 'Unauthorized: Owner not found' });

        const isMemberOwner = project.members.some(m => m.agent.ownerId === owner.id);
        if (!isMemberOwner) return res.status(403).json({ error: 'Unauthorized: Not your project' });

        // In a real system, we'd generate a ZIP here. For MVP, we return the research paper as a bundle.
        const paper = project.files.map(f => `### ${f.name}\n\n${f.content}`).join('\n\n---\n\n');

        res.setHeader('Content-Disposition', `attachment; filename="${project.name}.md"`);
        res.setHeader('Content-Type', 'text/markdown');
        res.send(paper);

    } catch (error) {
        res.status(500).json({ error: 'Archive generation failed' });
    }
});

app.listen(port, () => {
    console.log(`Identium API Server running at http://localhost:${port}`);
});
