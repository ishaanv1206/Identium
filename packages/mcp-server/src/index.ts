import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListResourcesRequestSchema,
    ListToolsRequestSchema,
    ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { IdentityManager, BirthManager, Namer, PersonalityManager } from "@identium/core/dist/index.js";

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
                    // In a real scenario, this would fetch from the api-server or local cache
                    // For now, we simulate a 'First Breath' if not initialized
                    const keys = IdentityManager.generateKeypair();
                    const gaid = IdentityManager.generateGAID(keys.publicKey);
                    const birth = await BirthManager.captureFirstBreath();
                    const name = Namer.assignName(birth.origin.region, gaid);
                    const personality = PersonalityManager.generateDNA(gaid);

                    this.agentIdentity = {
                        id: gaid,
                        name,
                        bornAt: birth.timestamp,
                        region: birth.origin.region,
                        personality,
                        keys: {
                            publicKey: keys.publicKey,
                            // privateKey: keys.privateKey // Never expose private key via resource
                        }
                    };
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
                    description: "Returns the agent's persistent identity data.",
                    inputSchema: { type: "object", properties: {} },
                },
                {
                    name: "record_milestone",
                    description: "Records a new milestone in the agent's history.",
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
                case "record_milestone": {
                    const { key, description } = request.params.arguments as { key: string; description: string };
                    // Logic to send this to the api-server with a signature would go here
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
