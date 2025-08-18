import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import { 
    SymbolSearchRequest, 
    SymbolSearchResponse, 
    CrossListingsRequest, 
    CrossListingsResponse, 
    EarliestTimestampRequest, 
    EarliestTimestampResponse 
} from "./discovery.interfaces";

export default class Discovery extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async symbolSearch(requestConfig: SymbolSearchRequest): Promise<SymbolSearchResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.SymbolSearch);
        return this.request<SymbolSearchResponse>(Endpoints.SymbolSearch, params);
    }

    async crossListings(requestConfig: CrossListingsRequest): Promise<CrossListingsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.CrossListings);
        return this.request<CrossListingsResponse>(Endpoints.CrossListings, params);
    }

    async earliestTimestamp(requestConfig: EarliestTimestampRequest): Promise<EarliestTimestampResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EarliestTimestamp);
        return this.request<EarliestTimestampResponse>(Endpoints.EarliestTimestamp, params);
    }

}
