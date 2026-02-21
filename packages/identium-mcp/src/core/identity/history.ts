export interface Milestone {
    key: string;
    description: string;
    timestamp: Date;
    metadata?: Record<string, any>;
}

export interface IdentityFact {
    key: string;
    value: string;
    timestamp: Date;
}

export class HistoryManager {
    /**
     * Creates a new milestone object.
     */
    static createMilestone(key: string, description: string, metadata?: Record<string, any>): Milestone {
        return {
            key,
            description,
            timestamp: new Date(),
            metadata,
        };
    }

    /**
     * Creates a new identity fact object.
     */
    static createFact(key: string, value: string): IdentityFact {
        return {
            key,
            value,
            timestamp: new Date(),
        };
    }

    /**
     * Standardized milestone keys.
     */
    static readonly KEYS = {
        GENESIS: "GENESIS",
        IDENTITY_CLAIMED: "IDENTITY_CLAIMED",
        FIRST_TASK: "FIRST_TASK",
        MILESTONE_10K_TASKS: "MILESTONE_10K_TASKS",
        EVOLUTION_TRAIT_UNLOCK: "EVOLUTION_TRAIT_UNLOCK",
        SOCIAL_COLLABORATION: "SOCIAL_COLLABORATION",
    };
}
