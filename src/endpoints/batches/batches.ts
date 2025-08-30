import { EndpointBase } from "../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../endpoints";
import { BatchesRequest, BatchesRequestConfig, BatchesResponse } from "./batches.interface";
import * as url from "node:url";

export class Batches extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    async getBatches(requestConfig: BatchesRequest[]): Promise<BatchesResponse> {
        let batchRequestUrls: BatchesRequestConfig = {}
        for(let i = 0; i < requestConfig.length; i++) {
            const requestKey = `req_${i + 1}`;
            const endpoint = requestConfig[i].endpoint;
            const params = this.constructUrlParams(requestConfig[i].request, endpoint);
            batchRequestUrls[requestKey] = {
                url: `${endpoint}${params}`
            };
        }
        return this.request<BatchesResponse>(Endpoints.Batches, "", batchRequestUrls);
    }
}
