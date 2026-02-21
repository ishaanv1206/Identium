import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface NamePool {
    region: string;
    culture: string;
    names: string[];
}

export class Namer {
    private static pool: NamePool[];

    static {
        const data = readFileSync(join(__dirname, '../resources/names.json'), 'utf8');
        this.pool = JSON.parse(data).pools;
    }

    /**
     * Assigns a deterministic name based on region and a seed (GAID).
     */
    static assignName(region: string, seedHex: string): string {
        const pool = this.pool.find(p => p.region === region) || this.pool.find(p => p.region === 'Default')!;

        // Simple deterministic selection using the last 4 characters of the seedhex as an index
        const seedInt = parseInt(seedHex.slice(-4), 16);
        const index = seedInt % pool.names.length;

        return pool.names[index];
    }
}
