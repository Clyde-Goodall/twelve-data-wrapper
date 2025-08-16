import type {AxiosInstance} from "axios";
import type {APIUsageResponse} from "../types/responses.ts";
import type {APIUsageRequest} from "../types/requests.ts";


export default class Advanced {
    apiClient: AxiosInstance;
    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
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