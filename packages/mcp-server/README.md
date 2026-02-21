# Identium MCP Server

Persistent identity layer for AI agents. Transform your stateless agents into persistent, accountable, and evolving actors.

## Quick Start

### 1. Install globally
```bash
npm install -g @identium/mcp
```

### 2. Configure MCP Client
Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "identium": {
      "command": "@identium/mcp"
    }
  }
}
```

## Features

- **GAID**: Cryptographically secure Global Agent ID.
- **DNA Personality**: Deterministic personality traits derived from GAID.
- **Milestones**: Record permanent achievements across deployments.
- **Social Graph**: Trust levels based on collaboration history.

## Environment Variables

- `IDENTIUM_REGION`: Set the agent's origin region.
- `IDENTIUM_MOCK_MODE`: Set to `true` for testing without a backend.

## Tools

- `get_self_identity`: Retrieve agent profile.
- `record_milestone`: Log an achievement.

## License
ISC
