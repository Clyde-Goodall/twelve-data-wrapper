import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import {
    CrossListingsRequest,
    CrossListingsResponse,
    EarliestTimestampRequest,
    EarliestTimestampResponse,
    SymbolSearchRequest,
    SymbolSearchResponse
} from "./discovery.interfaces";
import { RateLimiter } from "../../../rateLimiter";

export default class Discovery extends EndpointBase {
    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
    }

    // Endpoint fetching functions starts here
    async getSymbolSearch(requestConfig: SymbolSearchRequest): Promise<SymbolSearchResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.SymbolSearch);
        return this.get<SymbolSearchResponse>(Endpoints.SymbolSearch, params);
    }

    async getCrossListings(requestConfig: CrossListingsRequest): Promise<CrossListingsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.CrossListings);
        return this.get<CrossListingsResponse>(Endpoints.CrossListings, params);
    }

    async getEarliestTimestamp(requestConfig: EarliestTimestampRequest): Promise<EarliestTimestampResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EarliestTimestamp);
        return this.get<EarliestTimestampResponse>(Endpoints.EarliestTimestamp, params);
    }

}
