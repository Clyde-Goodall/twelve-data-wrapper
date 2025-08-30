import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { APIUsageRequest, APIUsageResponse } from "./advanced.interfaces";
import { Endpoints } from "../endpoints";

export default class Advanced extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async APIUsage(requestConfig?: APIUsageRequest): Promise<APIUsageResponse> {

        const params = this.constructUrlParams(requestConfig, Endpoints.APIUsage);
        return await this.request<APIUsageResponse>(Endpoints.APIUsage, params);
    }
}