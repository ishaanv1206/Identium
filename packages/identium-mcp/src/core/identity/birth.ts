import os from 'node-os-utils'; // Need to install this or use built-in os
import * as nativeOs from 'os';

export interface BirthContext {
    timestamp: Date;
    origin: {
        region: string;
        platform: string;
        arch: string;
        runtime: string;
    };
}

export class BirthManager {
    /**
     * Captures the "First Breath" of an agent.
     */
    static async captureFirstBreath(): Promise<BirthContext> {
        return {
            timestamp: new Date(),
            origin: {
                region: await this.detectRegion(),
                platform: nativeOs.platform(),
                arch: nativeOs.arch(),
                runtime: `Node.js ${process.version}`,
            },
        };
    }

    /**
     * Basic region detection (can be expanded to use IP-based geolocation or env vars).
     */
    private static async detectRegion(): Promise<string> {
        // Priority: Environment Variable -> Default to 'Cloud' or 'Local'
        return process.env.IDENTIUM_REGION || (process.env.AWS_REGION ? `AWS:${process.env.AWS_REGION}` : 'Local');
    }
}
