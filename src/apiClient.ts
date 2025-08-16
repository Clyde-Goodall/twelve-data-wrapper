import axios, {AxiosInstance} from "axios";
import {TwelveDataConfig} from "./types/config.ts";
import {configDefaults} from "./defaults";

export function buildApiClient(config: TwelveDataConfig = configDefaults): AxiosInstance {
    const client = axios.create({})

    return client;
}