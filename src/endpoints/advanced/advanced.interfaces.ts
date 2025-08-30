export interface APIUsageRequest {
    delimiter?: string;
    timezone?: string;
}

export interface APIUsageResponse {
    timestamp: string;
    currentUsage: number;
    planLimit: number;
}