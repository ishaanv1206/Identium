# Identium NPM Publishing Guide

Follow these steps to publish the `@identium` scoped packages to the npm registry.

## 1. Login to NPM
Ensure you have access to the `identium` organization on npm.
```bash
npm login
```

## 2. Publish Dependencies First
You must publish the core package first as other packages depend on it.

### Step A: Publish @identium/core
```bash
cd packages/core
npm publish --access public
cd ../..
```

## 3. Publish Remaining Packages
Once core is published, you can publish the rest in any order.

### Step B: Publish @identium/api
```bash
cd packages/api-server
npm publish --access public
cd ../..
```

### Step C: Publish @identium/mcp
```bash
cd packages/mcp-server
npm publish --access public
cd ../..
```

### Step D: Publish @identium/dashboard
```bash
cd packages/web-dashboard
npm publish --access public
cd ../..
```

## 4. Verification
Try installing the MCP server from anywhere using npx:
```bash
npx @identium/mcp --help
```
