import { AxiosError, AxiosInstance } from "axios";
import { globalTransformationManager } from "../serialization";
import { TwelveDataConfig } from "../twelveData.interfaces";
import { ERROR_MESSAGES } from "../endpoints/shared.interfaces";

export function getDefaultConfig(): TwelveDataConfig {
    return {
        apiKey: "demo",
        debugMode: false,
        baseUrl: "https://api.twelvedata.com",
        timeout: 30000,
        retryCount: 1,
        retryWaitTime: 1000
    };
}

type UrlParams = Record<string, string | number | boolean | undefined> | {} | undefined;

export interface TwelveDataApiError {
    code: number;
    message: string;
    status: "error";
}

export class TwelveDataError extends Error {
    public readonly code: number;
    public readonly status: string;

    constructor(apiError: TwelveDataApiError) {
        super(apiError.message);
        this.name = "TwelveDataError";
        this.code = apiError.code;
        this.status = apiError.status;
    }
}

export abstract class EndpointBase {
    private readonly apiClient: AxiosInstance;

    protected constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    protected constructUrlParams(params: UrlParams, endpoint?: string): string {
        if (!params) {
            return "";
        }

        // Transform the params object using endpoint-specific configuration
        const transformedParams = endpoint
            ? globalTransformationManager.transformRequestForEndpoint(params, endpoint)
            : params;

        const urlParams = new URLSearchParams();
        for (const [key, value] of Object.entries(transformedParams)) {
            if (value !== undefined) {
                urlParams.append(key, String(value));
            }
        }
        const paramString = urlParams.toString();
        return paramString ? `?${paramString}` : "";
    }

    protected async request<T>(endpoint: string, params: string): Promise<T> {
        try {
            const url = `${endpoint}${params}`;

            const response = await this.apiClient.get<T>(url);

            // Check if the response is an API error (even with 200 status)
            const data = response.data as any;
            if (data && typeof data === "object" && data.status === "error") {
                throw new TwelveDataError(data as TwelveDataApiError);
            }

            return response.data;
        } catch (error) {
            // Re-throw TwelveDataError as-is
            if (error instanceof TwelveDataError) {
                throw error;
            }

            // Handle AxiosError with API error response
            if (error instanceof AxiosError && error.response?.data) {
                const apiError = error.response.data as any;
                if (apiError && typeof apiError === "object" && apiError.status === "error") {
                    throw new TwelveDataError(apiError as TwelveDataApiError);
                }
            }

            // Re-throw any other errors (network errors, etc.)
            throw error;
        }
    }

    protected async requestWithFormat<TResponse>(
        endpoint: string,
        params: string,
        format?: "json" | "csv"
    ): Promise<TResponse | string> {
        if (format === "csv") {
            return this.request<string>(endpoint, params);
        }
        return this.request<TResponse>(endpoint, params);
    }

    protected atLeastOneOf<Type>(obj: Type, keys: (keyof Type)[]): boolean {
        return keys.some(key => obj[key] !== undefined);
    }

    protected validateRequiredIdentifiers<Type>(obj: Type, keys: (keyof Type)[] = ["symbol", "figi", "isin", "cusip"] as (keyof Type)[]): void {
        if (!this.atLeastOneOf(obj, keys)) {
            throw new Error(ERROR_MESSAGES.AT_LEAST_ONE_IDENTIFIER_REQUIRED);
        }
    }

    protected validateInterval<Type extends { interval?: any }>(obj: Type): void {
        if (!obj.interval) {
            throw new Error(ERROR_MESSAGES.INTERVAL_REQUIRED);
        }
    }

    protected validateBase<Type extends { base?: any }>(obj: Type): void {
        if (!obj.base) {
            throw new Error(ERROR_MESSAGES.BASE_REQUIRED);
        }
    }
}