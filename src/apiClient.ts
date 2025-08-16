import axios, {AxiosInstance} from "axios";
import {TwelveDataConfig} from "./types/config";
import {configDefaults} from "./defaults";

export function buildApiClient(config: TwelveDataConfig = configDefaults): AxiosInstance {
    const client = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeout,
    });

    client.interceptors.request.use(async(request) => {
       if (request.method?.toLowerCase() === 'get')  {
           request.params['apikey'] = config.apiKey;
       }
        return request;
    });
    return client;
}