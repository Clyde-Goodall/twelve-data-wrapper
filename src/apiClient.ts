import axios, { AxiosInstance } from "axios";
import { getDefaultConfig } from "./defaults";
import { globalTransformationManager, serializeTwelveDataResponse } from "./serialization";
import { TwelveDataConfig } from "./twelveData.interfaces";

export function buildApiClient(config?: TwelveDataConfig): AxiosInstance {
    if (!config) {
        config = getDefaultConfig();
    }
    const client = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeout,
        transformResponse: [serializeTwelveDataResponse]
    });

    client.interceptors.request.use(async(request) => {
        if (request.method?.toLowerCase() === 'get')  {
            request.params = request.params || {};
            request.params['apikey'] = config.apiKey;
        }
        return request;
    });

    client.interceptors.response.use(async(response) => {
        const endpoint = response.config.url?.split('?')[0]!;
        response.data = globalTransformationManager.transformResponseForEndpoint(response.data, endpoint);

        return response;
    })
    return client;
}