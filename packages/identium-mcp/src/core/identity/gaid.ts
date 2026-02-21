import * as nacl from 'tweetnacl';
import { bech32 } from 'bech32';
import { createHash } from 'crypto';

export interface AgentKeys {
    publicKey: string; // Hex encoded
    privateKey: string; // Hex encoded
}

export class IdentityManager {
    /**
     * Generates a new ED25519 keypair for an agent.
     */
    static generateKeypair(): AgentKeys {
        const keypair = nacl.sign.keyPair();
        return {
            publicKey: Buffer.from(keypair.publicKey).toString('hex'),
            privateKey: Buffer.from(keypair.secretKey).toString('hex'),
        };
    }

    /**
     * Generates a Global Agent ID (GAID) from a public key.
     * Format: dg1[bech32_payload]
     */
    static generateGAID(publicKeyHex: string): string {
        const publicKeyBuffer = Buffer.from(publicKeyHex, 'hex');
        const hash = createHash('sha256').update(publicKeyBuffer).digest();

        // Use the first 20 bytes of the hash for Bech32 (similar to Bitcoin/Cosmos)
        const words = bech32.toWords(hash.slice(0, 20));
        return bech32.encode('id', words);
    }

    /**
     * Generates a Unique Agent Key (UAK) - 64 character secret.
     */
    static generateUAK(): string {
        return Buffer.from(nacl.randomBytes(32)).toString('hex');
    }

    /**
     * Signs data with the agent's private key.
     */
    static sign(data: string, privateKeyHex: string): string {
        const message = Buffer.from(data);
        const secretKey = Buffer.from(privateKeyHex, 'hex');
        const signature = nacl.sign.detached(message, secretKey);
        return Buffer.from(signature).toString('hex');
    }

    /**
     * Verifies a signature against a public key and message.
     */
    static verify(data: string, signatureHex: string, publicKeyHex: string): boolean {
        const message = Buffer.from(data);
        const signature = Buffer.from(signatureHex, 'hex');
        const publicKey = Buffer.from(publicKeyHex, 'hex');
        return nacl.sign.detached.verify(message, signature, publicKey);
    }
}
