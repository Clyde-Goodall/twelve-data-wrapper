import type {AxiosInstance} from "axios";
import {APIUsageResponse} from "../types/responses.ts";
import {APIUsageRequest} from "../types/requests.ts";


export default class Advanced {
    apiClient: AxiosInstance;
    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    // Endpoint fetching functions starts here
    async APIUsage(requestConfig?: APIUsageRequest): Promise<APIUsageResponse> {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(requestConfig ?? {})) {
            const mappedKey = key;
            const mappedName = value;
            params.append(mappedKey, mappedName);
        }
        const response = await this.apiClient.get(`/usage${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }


}