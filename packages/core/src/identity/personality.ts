import { createHash } from 'crypto';

export interface PersonalityDNA {
    vector: number[]; // 16 dimensions [0, 1]
    traits: string[];
}

export const PERSONALITY_DIMENSIONS = [
    "Formality",
    "Assertiveness",
    "Curiosity",
    "Risk Tolerance",
    "Empathy Bias",
    "Creativity",
    "Humor",
    "Precision",
    "Abstraction",
    "Patience",
    "Directness",
    "Skepticism",
    "Enthusiasm",
    "Stability",
    "Openness",
    "Diplomacy"
];

export class PersonalityManager {
    /**
     * Generates a deterministic personality vector (16 dimensions) from a seed.
     */
    static generateDNA(seedHex: string): PersonalityDNA {
        const dna: number[] = [];
        const hash = createHash('sha256').update(seedHex).digest();

        // Use pairs of bytes from the hash to generate 16 values between 0 and 1
        for (let i = 0; i < 16; i++) {
            const value = hash.readUInt16BE(i * 2) / 65535;
            dna.push(parseFloat(value.toFixed(4)));
        }

        return {
            vector: dna,
            traits: this.mapToTraits(dna),
        };
    }

    /**
     * Maps high/low values in the vector to human-readable traits.
     */
    private static mapToTraits(vector: number[]): string[] {
        const traits: string[] = [];

        vector.forEach((value, index) => {
            if (value > 0.8) {
                traits.push(`High ${PERSONALITY_DIMENSIONS[index]}`);
            } else if (value < 0.2) {
                traits.push(`Low ${PERSONALITY_DIMENSIONS[index]}`);
            }
        });

        return traits;
    }

    /**
     * Applies behavioral "drift" to the personality vector.
     * Drift is capped at +/- 5% per dimension.
     */
    static applyDrift(dna: PersonalityDNA, feedback: number[]): PersonalityDNA {
        const newVector = dna.vector.map((val, i) => {
            const delta = (feedback[i] || 0) * 0.05;
            return parseFloat(Math.max(0, Math.min(1, val + delta)).toFixed(4));
        });

        return {
            vector: newVector,
            traits: this.mapToTraits(newVector),
        };
    }
}
