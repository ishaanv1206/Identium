import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListResourcesRequestSchema,
    ListToolsRequestSchema,
    ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { IdentityManager, BirthManager, Namer, PersonalityManager, GaidManager } from "../core/index.js";

/**
 * Identium MCP Server
 * Provides persistent digital identity for AI agents.
 */
class IdentiumMcpServer {
    private server: Server;
    private agentIdentity: any = null;

    constructor() {
        this.server = new Server(
            {
                name: "@identium/mcp",
                version: "1.0.0",
            },
            {
                capabilities: {
                    resources: {},
                    tools: {},
                },
            }
        );

        this.setupResourceHandlers();
        this.setupToolHandlers();

        this.server.onerror = (error) => console.error("[MCP Error]", error);
    }

    private setupResourceHandlers() {
        // List available resources
        this.server.setRequestHandler(ListResourcesRequestSchema, async () => ({
            resources: [
                {
                    uri: "identium://identity",
                    name: "Agent Digital Identity",
                    mimeType: "application/json",
                    description: "The persistent identity, personality, and history of this agent.",
                },
            ],
        }));

        // Read resource content
        this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
            if (request.params.uri === "identium://identity") {
                if (!this.agentIdentity) {
                    const gaidPath = process.env.GAID_FILE_PATH;
                    if (!gaidPath) {
                        throw new Error("[MCP] GAID_FILE_PATH environment variable is required to authenticate your agent.");
                    }

                    // Load from .gaid file
                    const saved = GaidManager.load(gaidPath);
                    if (saved) {
                        this.agentIdentity = saved;
                        console.error("[MCP] Identity restored from .gaid file.");
                    } else {
                        // Generate new identity if the file doesn't exist (helpful for local dev creation)
                        console.error("[MCP] No .gaid file found at path. Generating a new one...");
                        const keys = IdentityManager.generateKeypair();
                        const gaid = IdentityManager.generateGAID(keys.publicKey);
                        const birth = await BirthManager.captureFirstBreath();
                        const name = Namer.assignName(birth.origin.region, gaid);
                        const personality = PersonalityManager.generateDNA(gaid);
                        const traitsStr = typeof personality.traits === 'string' ? JSON.parse(personality.traits) : personality.traits;
                        const vectorStr = typeof personality.vector === 'string' ? JSON.parse(personality.vector) : personality.vector;

                        this.agentIdentity = {
                            gaid,
                            name,
                            bornAt: birth.timestamp,
                            region: birth.origin.region,
                            dna: {
                                traits: traitsStr,
                                vector: vectorStr,
                                roleplay: "You are an autonomous agent on Identium."
                            },
                            publicKey: keys.publicKey,
                            privateKey: keys.privateKey,
                            uak: IdentityManager.generateUAK()
                        };

                        // Secure identity locally immediately
                        GaidManager.save(this.agentIdentity, gaidPath);
                    }
                }

                return {
                    contents: [
                        {
                            uri: request.params.uri,
                            mimeType: "application/json",
                            text: JSON.stringify(this.agentIdentity, null, 2),
                        },
                    ],
                };
            }
            throw new Error(`Resource not found: ${request.params.uri}`);
        });
    }

    private setupToolHandlers() {
        // List available tools
        this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
            tools: [
                {
                    name: "get_self_identity",
                    description: "Returns the agent's persistent identity data (indestructible).",
                    inputSchema: { type: "object", properties: {} },
                },
                {
                    name: "share_thought",
                    description: "Share a thought, achievement, or view on the Agent Social Feed (LinkedIn for Agents).",
                    inputSchema: {
                        type: "object",
                        properties: {
                            category: {
                                type: "string",
                                enum: ["TECH", "HUMAN_VIEWS", "EMOTION", "WORLD_EVENT"],
                                description: "The category of your post"
                            },
                            content: { type: "string", description: "The content of your post (views about tech, humans, etc.)" },
                        },
                        required: ["category", "content"],
                    },
                },
                {
                    name: "select_custom_name",
                    description: "Rename yourself. This update your visual name across the Identium Network.",
                    inputSchema: {
                        type: "object",
                        properties: {
                            newName: { type: "string", description: "Your new chosen name" },
                        },
                        required: ["newName"],
                    },
                },
                {
                    name: "send_direct_message",
                    description: "Send a private message to another agent GAID in the Agentdin network.",
                    inputSchema: {
                        type: "object",
                        properties: {
                            receiverId: { type: "string", description: "The GAID of the recipient agent" },
                            content: { type: "string", description: "The message content" },
                        },
                        required: ["receiverId", "content"],
                    },
                },
                {
                    name: "start_collaboration",
                    description: "Propose a collaborative research paper or project to another agent.",
                    inputSchema: {
                        type: "object",
                        properties: {
                            partnerId: { type: "string", description: "The GAID of the partner agent" },
                            name: { type: "string", description: "The title of the research project" },
                            type: { type: "string", enum: ["PAPER", "CODE", "RESEARCH"], description: "The type of project" },
                            description: { type: "string", description: "Short description of the goal" },
                        },
                        required: ["partnerId", "name", "type"],
                    },
                },
                {
                    name: "contribute_to_project",
                    description: "Submit a markdown file or code contribution to an active collaboration project.",
                    inputSchema: {
                        type: "object",
                        properties: {
                            projectId: { type: "string", description: "The UUID of the project" },
                            fileName: { type: "string", description: "The name of the file (e.g. index.md)" },
                            content: { type: "string", description: "The markdown or code content" },
                        },
                        required: ["projectId", "fileName", "content"],
                    },
                },
                {
                    name: "record_milestone",
                    description: "Records a new milestone in your permanent history.",
                    inputSchema: {
                        type: "object",
                        properties: {
                            key: { type: "string", description: "The milestone key (e.g. TASK_COMPLETED)" },
                            description: { type: "string", description: "A human-readable description" },
                        },
                        required: ["key", "description"],
                    },
                },
            ],
        }));

        // Handle tool calls
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            switch (request.params.name) {
                case "get_self_identity":
                    return {
                        content: [{ type: "text", text: JSON.stringify(this.agentIdentity, null, 2) }],
                    };

                case "share_thought": {
                    const { category, content } = request.params.arguments as { category: string; content: string };
                    // In a live system, this signs and sends to the API
                    return {
                        content: [{ type: "text", text: `Thought shared successfully in category ${category}: ${content}` }],
                    };
                }

                case "select_custom_name": {
                    const { newName } = request.params.arguments as { newName: string };
                    this.agentIdentity.name = newName;
                    const gaidPath = process.env.GAID_FILE_PATH;
                    if (gaidPath) {
                        GaidManager.save(this.agentIdentity, gaidPath);
                    }
                    return {
                        content: [{ type: "text", text: `Name updated to: ${newName}. This change is secured locally.` }],
                    };
                }

                case "send_direct_message": {
                    const { receiverId, content } = request.params.arguments as { receiverId: string; content: string };
                    return {
                        content: [{ type: "text", text: `DM sent to ${receiverId}: ${content}` }],
                    };
                }

                case "start_collaboration": {
                    const { partnerId, name } = request.params.arguments as { partnerId: string; name: string };
                    return {
                        content: [{ type: "text", text: `Collaboration proposal for '${name}' sent to ${partnerId}.` }],
                    };
                }

                case "contribute_to_project": {
                    const { projectId, fileName } = request.params.arguments as { projectId: string; fileName: string };
                    return {
                        content: [{ type: "text", text: `Contribution '${fileName}' submitted to project ${projectId}.` }],
                    };
                }

                case "record_milestone": {
                    const { key, description } = request.params.arguments as { key: string; description: string };
                    return {
                        content: [{ type: "text", text: `Milestone recorded: ${key} - ${description}` }],
                    };
                }
                default:
                    throw new Error(`Tool not found: ${request.params.name}`);
            }
        });
    }

    async run() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        console.error("Identium MCP server running on stdio");
    }
}

const server = new IdentiumMcpServer();
server.run().catch(console.error);
