import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { APIUsageRequest, APIUsageResponse } from "./advanced.interfaces";
import { Endpoints } from "../endpoints";
import { RateLimiter } from "../../rateLimiter";

export default class Advanced extends EndpointBase {
    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
    }

    // Endpoint fetching functions starts here
    async APIUsage(requestConfig: APIUsageRequest, format: "csv"): Promise<string>;
    async APIUsage(requestConfig?: APIUsageRequest, format?: "json"): Promise<APIUsageResponse>;
    async APIUsage(requestConfig?: APIUsageRequest, format?: "json" | "csv"): Promise<APIUsageResponse | string> {

        const params = this.constructUrlParams(requestConfig, Endpoints.APIUsage);
        return await this.requestWithFormat(Endpoints.APIUsage, params, format);
    }
}