import { EndpointBase } from "../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../endpoints";
import { BatchRequest, BatchRequestConfig } from "./batch.interfaces";

export class Batch extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    async getBatch(requestConfig: BatchRequest[]): Promise<any> {
        let batchRequestUrls: BatchRequestConfig = {}
        for(let i = 1; i <= requestConfig.length; i++) {
            const params = this.constructUrlParams(requestConfig, Endpoints.Batch);
            batchRequestUrls[`req_${i}`].url = params;
        }
        return this.request<any>(Endpoints.Batch, params);
    }
}
