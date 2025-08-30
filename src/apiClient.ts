import axios, { AxiosInstance } from "axios";
import { getDefaultConfig } from "./defaults";
import { globalTransformationManager } from "./serialization";
import { TwelveDataConfig } from "./twelveData.interfaces";

export function buildApiClient(config?: TwelveDataConfig): AxiosInstance {
    if (!config) {
        config = getDefaultConfig();
    }
    const client = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeout,
    });

    client.interceptors.request.use(async (request) => {
        if (request.method?.toLowerCase() === "get") {
            request.params = request.params || {};
            request.params["apikey"] = config.apiKey;
        }
        return request;
    });

    client.interceptors.response.use(async (response) => {
        if (response.headers["content-type"] && response.headers["content-type"] === "text/csv") {
            return response;
        }

        const endpoint = response.config.url?.split("?")[0]!;
        response.data = globalTransformationManager.transformResponseForEndpoint(response.data, endpoint);
        return response;
    });
    return client;
}