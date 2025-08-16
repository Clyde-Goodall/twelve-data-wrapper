import type {AxiosInstance} from "axios";
import type {
    EarningsEstimateRequest,
    EPSTrendRequest,
    RevenueEstimateRequest
} from "../types/requests.ts";
import type {
    EarningsEstimateResponse,
    EPSTrendResponse,
    RevenueEstimateResponse
} from "../types/responses.ts";



export default class Analysis {
    apiClient: AxiosInstance;
    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    // Endpoint fetching functions starts here
    async EarningsEstimate(requestConfig: EarningsEstimateRequest): Promise<EarningsEstimateResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/usage${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async RevenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/revenue_estimate${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async EPSTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/eps_trend${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;    }
}