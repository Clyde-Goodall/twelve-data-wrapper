export interface APIUsageRequest {
    format?: "JSON" | "CSV";
    delimiter?: string;
    timezone?: string;
}

export interface APIUsageResponse {
    timestamp: string;
    currentUsage: number;
    planLimit: number;
}