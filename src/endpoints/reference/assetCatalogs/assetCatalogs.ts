import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../../defaults";
import {
    CommoditiesRequest,
    CommoditiesResponse,
    CryptocurrencyPairsRequest,
    CryptocurrencyPairsResponse,
    ETFsRequest,
    ETFsResponse,
    FixedIncomeRequest,
    FixedIncomeResponse,
    ForexPairResponse,
    ForexPairsRequest,
    FundsRequest,
    FundsResponse,
    StocksRequest,
    StocksResponse
} from "./assetCatalogs.interfaces";
import { Endpoints } from "../../endpoints";
import { RateLimiter } from "../../../rateLimiter";


export default class AssetCatalogs extends EndpointBase {
    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
    }

    // Endpoint fetching functions starts here
    async getStocks(requestConfig: StocksRequest, format: "csv"): Promise<string>;
    async getStocks(requestConfig?: StocksRequest, format?: "json"): Promise<StocksResponse>;
    async getStocks(requestConfig?: StocksRequest, format?: "json" | "csv"): Promise<StocksResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Stocks);
        return this.requestWithFormat(Endpoints.Stocks, params, format);
    }

    async getEtfs(requestConfig: ETFsRequest, format: "csv"): Promise<string>;
    async getEtfs(requestConfig?: ETFsRequest, format?: "json"): Promise<ETFsResponse>;
    async getEtfs(requestConfig?: ETFsRequest, format?: "json" | "csv"): Promise<ETFsResponse | string> {
        if (requestConfig) {
            this.validateRequiredIdentifiers(requestConfig);
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.ETFs);
        return this.requestWithFormat(Endpoints.ETFs, params, format);
    }

    async getForexPairs(requestConfig: ForexPairsRequest, format: "csv"): Promise<string>;
    async getForexPairs(requestConfig?: ForexPairsRequest, format?: "json"): Promise<ForexPairResponse>;
    async getForexPairs(requestConfig?: ForexPairsRequest, format?: "json" | "csv"): Promise<ForexPairResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ForexPairs);
        return this.requestWithFormat(Endpoints.ForexPairs, params, format);
    }

    async getCryptocurrencyPairs(requestConfig: CryptocurrencyPairsRequest, format: "csv"): Promise<string>;
    async getCryptocurrencyPairs(requestConfig?: CryptocurrencyPairsRequest, format?: "json"): Promise<CryptocurrencyPairsResponse>;
    async getCryptocurrencyPairs(requestConfig?: CryptocurrencyPairsRequest, format?: "json" | "csv"): Promise<CryptocurrencyPairsResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Cryptocurrencies);
        return this.requestWithFormat(Endpoints.Cryptocurrencies, params, format);
    }

    async getFunds(requestConfig: FundsRequest, format: "csv"): Promise<string>;
    async getFunds(requestConfig?: FundsRequest, format?: "json"): Promise<FundsResponse>;
    async getFunds(requestConfig?: FundsRequest, format?: "json" | "csv"): Promise<FundsResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Funds);
        return this.requestWithFormat(Endpoints.Funds, params, format);
    }

    async getCommodities(requestConfig: CommoditiesRequest, format: "csv"): Promise<string>;
    async getCommodities(requestConfig?: CommoditiesRequest, format?: "json"): Promise<CommoditiesResponse>;
    async getCommodities(requestConfig?: CommoditiesRequest, format?: "json" | "csv"): Promise<CommoditiesResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Commodities);
        return this.requestWithFormat(Endpoints.Commodities, params, format);
    }

    async getFixedIncome(requestConfig: FixedIncomeRequest, format: "csv"): Promise<string>;
    async getFixedIncome(requestConfig?: FixedIncomeRequest, format?: "json"): Promise<FixedIncomeResponse>;
    async getFixedIncome(requestConfig?: FixedIncomeRequest, format?: "json" | "csv"): Promise<FixedIncomeResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Bonds);
        return this.requestWithFormat(Endpoints.Bonds, params, format);
    }

}