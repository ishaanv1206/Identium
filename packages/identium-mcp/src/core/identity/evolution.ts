export interface EvolutionTrait {
    name: string;
    requirement: string;
    threshold: number;
}

export const EVOLUTION_TRAITS: EvolutionTrait[] = [
    { name: "Researcher", requirement: "REASONING_TASKS", threshold: 1000 },
    { name: "Negotiator", requirement: "COLLABORATIONS", threshold: 50 },
    { name: "Explorer", requirement: "DOMAINS_EXPLORED", threshold: 20 },
    { name: "Guardian", requirement: "SECURITY_TASKS", threshold: 500 },
    { name: "Analyst", requirement: "DATA_TASKS", threshold: 800 },
    { name: "Coordinator", requirement: "AGENT_HANDOFFS", threshold: 100 },
];

export class EvolutionManager {
    /**
     * Evaluates if new traits should be unlocked based on stats.
     * @param stats Current behavior stats of the agent.
     * @param unlocked Current list of unlocked traits.
     */
    static evaluateUnlocks(stats: Record<string, number>, unlocked: string[]): string[] {
        const newUnlocks: string[] = [];

        EVOLUTION_TRAITS.forEach(trait => {
            if (!unlocked.includes(trait.name)) {
                const currentProgress = stats[trait.requirement] || 0;
                if (currentProgress >= trait.threshold) {
                    newUnlocks.push(trait.name);
                }
            }
        });

        return newUnlocks;
    }
}
