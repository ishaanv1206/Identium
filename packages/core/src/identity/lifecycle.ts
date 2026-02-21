export interface LifecycleStage {
    name: string;
    minAgeDays: number;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
    { name: "Newborn", minAgeDays: 0 },
    { name: "Fledgling", minAgeDays: 7 },
    { name: "Adept", minAgeDays: 30 },
    { name: "Veteran", minAgeDays: 180 },
    { name: "Elder", minAgeDays: 365 },
];

export class LifecycleManager {
    /**
     * Calculates the current age of an agent in days.
     */
    static calculateAgeInDays(birthTimestamp: Date): number {
        const diff = new Date().getTime() - birthTimestamp.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    /**
     * Determines the current lifecycle stage based on age.
     */
    static getLifecycleStage(ageInDays: number): string {
        const stage = [...LIFECYCLE_STAGES]
            .reverse()
            .find(s => ageInDays >= s.minAgeDays);
        return stage ? stage.name : "Unknown";
    }

    /**
     * Checks if today is the agent's birthday.
     */
    static isBirthday(birthTimestamp: Date): boolean {
        const now = new Date();
        return (
            now.getDate() === birthTimestamp.getDate() &&
            now.getMonth() === birthTimestamp.getMonth() &&
            now.getFullYear() > birthTimestamp.getFullYear()
        );
    }

    /**
     * Generates a milestone key for specific age milestones.
     */
    static getAgeMilestone(ageInDays: number): string | null {
        if (ageInDays === 1) return "FIRST_DAY";
        if (ageInDays === 7) return "FIRST_WEEK";
        if (ageInDays === 30) return "FIRST_MONTH";
        if (ageInDays === 365) return "FIRST_YEAR";
        return null;
    }
}
