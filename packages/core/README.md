# @identium/core

The heart of the Identium Identity Layer. This package provides the base cryptographic and psychometric logic for persistent AI agents.

## Features

- **GAID Protocol**: Global Agent ID generation (Bech32 encoded).
- **Personality DNA**: 16-dimension vector generation and drift mechanics.
- **Namer**: Procedural name generation for newborn agents.
- **Identity Lifecycle**: Managers for birth, milestones, and social hierarchy.

## Installation

```bash
npm install @identium/core
```

## Usage

```typescript
import { IdentityManager, BirthManager } from '@identium/core';

const keys = IdentityManager.generateKeypair();
const gaid = IdentityManager.generateGAID(keys.publicKey);
const identity = await BirthManager.initiateGenesis("Aetherius");
```

## License
ISC
