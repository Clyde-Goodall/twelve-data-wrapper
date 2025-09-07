/**
 * A rate limiter that allows a certain number of credits per minute.
 * Takes into account the credit weight of each request and optimizes credit usage
 * by allowing lower-weight requests to go before higher-weight ones when possible.
 * Per TwelveData docs, credits reset at the start of each minute.
 */
export class RateLimiter {
    private readonly maxCredits: number;
    private currentCredits: number = 0;
    private currentMinuteTimestamp: number;
    private requestQueue: QueuedRequest[] = [];
    private isProcessing: boolean = false;
    private waitTimeout: NodeJS.Timeout | null = null;

    constructor(creditsPerMinute: number) {
        this.maxCredits = creditsPerMinute;
        this.currentMinuteTimestamp = this.getCurrentMinuteTimestamp();
    }

    async throttle(creditWeight: number): Promise<void> {
        return new Promise((resolve) => {
            this.requestQueue.push({ creditWeight, resolve });

            // If we're waiting for next minute, cancel the wait and reprocess
            if (this.waitTimeout) {
                clearTimeout(this.waitTimeout);
                this.waitTimeout = null;
                this.isProcessing = false;
            }

            this.processQueue();
        });
    }

    private getCurrentMinuteTimestamp(): number {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(),
            now.getHours(), now.getMinutes(), 0, 0).getTime();
    }

    private resetIfNewMinute(): void {
        const newMinuteTimestamp = this.getCurrentMinuteTimestamp();
        if (newMinuteTimestamp !== this.currentMinuteTimestamp) {
            this.currentCredits = 0;
            this.currentMinuteTimestamp = newMinuteTimestamp;
        }
    }

    private async processQueue(): Promise<void> {
        if (this.isProcessing || this.requestQueue.length === 0) {
            return;
        }

        this.isProcessing = true;

        while (this.requestQueue.length > 0) {
            this.resetIfNewMinute();

            if (this.maxCredits === 0) {
                // No rate limiting
                const request = this.requestQueue.shift()!;
                request.resolve();
                continue;
            }

            // Find the best request to process next (optimize credit usage)
            const bestIndex = this.findBestRequestIndex();

            if (bestIndex === -1) {
                // No request can fit in current minute, wait until next minute
                await this.waitUntilNextMinute();
                continue;
            }

            const request = this.requestQueue.splice(bestIndex, 1)[0];
            this.currentCredits += request.creditWeight;
            request.resolve();
        }

        this.isProcessing = false;
    }

    private findBestRequestIndex(): number {
        const remainingCredits = this.maxCredits - this.currentCredits;

        // First, try to find requests that fit exactly or use remaining credits efficiently
        for (let i = 0; i < this.requestQueue.length; i++) {
            const request = this.requestQueue[i];
            if (request.creditWeight <= remainingCredits) {
                return i;
            }
        }

        return -1; // No request can fit
    }

    private async waitUntilNextMinute(): Promise<void> {
        const now = new Date();
        const secondsIntoMinute = now.getSeconds();
        const millisecondsIntoSecond = now.getMilliseconds();
        const msUntilNextMinute = (60 - secondsIntoMinute - 1) * 1000 + (1000 - millisecondsIntoSecond);

        await new Promise<void>((resolve) => {
            this.waitTimeout = setTimeout(() => {
                this.waitTimeout = null;
                resolve();
            }, msUntilNextMinute);
        });
    }
}

interface QueuedRequest {
    creditWeight: number;
    resolve: () => void;
}