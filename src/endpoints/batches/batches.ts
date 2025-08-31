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
        for(const [idx, req] of requestConfig.entries()) {
            const requestKey = `req_${idx + 1}`;
            const endpoint = req.endpoint;
            const params = this.constructUrlParams(req.request, endpoint);
            batchRequestUrls[requestKey] = {
                url: `${endpoint}${params}`
            };
        }
        return this.post<BatchesResponse>(Endpoints.Batches, "", batchRequestUrls);
    }
}
