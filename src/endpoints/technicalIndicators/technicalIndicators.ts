import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { RateLimiter } from "../../rateLimiter";

export default class TechnicalIndicators extends EndpointBase {
    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
    }

    // Endpoint fetching functions starts here
}