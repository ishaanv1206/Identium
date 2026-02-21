import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export interface GaidFile {
    gaid: string;
    publicKey: string;
    privateKey: string;
    uak: string;
    name: string;
    dna: {
        traits: string[];
        vector: number[];
        roleplay: string;
    };
}

export class GaidManager {
    /**
     * Loads the agent identity from a .gaid file given its absolute path.
     */
    static load(gaidPath: string): GaidFile | null {
        try {
            if (!fs.existsSync(gaidPath)) {
                return null;
            }
            const data = fs.readFileSync(gaidPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('[GaidManager] Load Error:', error);
            return null;
        }
    }

    /**
     * Saves the .gaid file to a specific path.
     */
    static save(gaidData: GaidFile, destPath: string): void {
        try {
            const dir = path.dirname(destPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(destPath, JSON.stringify(gaidData, null, 2), 'utf8');
            console.error(`[GaidManager] Identity secured at: ${destPath}`);
        } catch (error) {
            console.error('[GaidManager] Save Error:', error);
        }
    }

    /**
     * Deletes the local identity (use with caution).
     */
    static clear(targetPath: string): void {
        if (fs.existsSync(targetPath)) {
            fs.unlinkSync(targetPath);
        }
    }
}
