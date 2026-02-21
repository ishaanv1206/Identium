export interface InteractionRecord {
    fromGaid: string;
    toGaid: string;
    type: "COLLABORATION" | "TRANSACTION" | "MESSAGE";
    timestamp: Date;
    success: boolean;
}

export class SocialManager {
    /**
     * Calculates a reputation score based on task success and interaction history.
     */
    static calculateReputation(successRate: number, totalTasks: number): number {
        // Base score 0-100
        if (totalTasks === 0) return 50;

        const base = successRate * 100;
        const volumeBonus = Math.min(Math.log10(totalTasks + 1) * 10, 20); // Max 20 points bonus for volume

        return Math.min(Math.round(base + volumeBonus), 100);
    }

    /**
     * Determines the "Trust Level" between two agents.
     */
    static getTrustLevel(interactionCount: number): string {
        if (interactionCount > 100) return "ALLY";
        if (interactionCount > 20) return "TRUSTED";
        if (interactionCount > 5) return "ACQUAINTANCE";
        return "STRANGER";
    }
}
