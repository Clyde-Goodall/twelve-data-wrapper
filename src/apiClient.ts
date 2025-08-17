import axios, { AxiosInstance } from "axios";
import { TwelveDataConfig } from "./types/config";
import { getDefaultConfig } from "./defaults";

export function buildApiClient(config?: TwelveDataConfig): AxiosInstance {
    if (!config) {
        config = getDefaultConfig();
    }
    const client = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeout,
    });

    client.interceptors.request.use(async(request) => {
        if (request.method?.toLowerCase() === 'get')  {
            request.params = request.params || {};
            request.params['apikey'] = config.apiKey;
        }
        return request;
    });
    return client;
}