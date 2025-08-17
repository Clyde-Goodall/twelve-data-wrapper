import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { APIUsageRequest } from "../../types/requests";
import { APIUsageResponse } from "../../types/responses";


export default class Advanced extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient)
    }

    // Endpoint fetching functions starts here
    async APIUsage(requestConfig?: APIUsageRequest): Promise<APIUsageResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/usage${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }


}