/*
 /stocks
 */

import { SecurityType } from "../../shared.interfaces";

export interface StocksRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    type?: SecurityType;
    delimiter?: string;
    showPlan?: boolean;
    includeDelisted?: boolean;
}

export interface StockEntry {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    micCode: string;
    country: string;
    type: string;
    figiCode: string;
    cfiCode: string;
    isin: string;
    cusip: string;
    access: {
        global: string;
        plan: string;
    };
}

export interface StocksResponse {
    data: Array<StockEntry>;

}

/*
 /forex_pairs
 */
export interface ForexPairsRequest {
    symbol?: string;
    currencyBase?: string;
    currencyQuote?: string;
    delimiter?: string;
}

export interface ForexPairEntry {
    symbol: string;
    availableExchanges: string[];
    currencyBase: string;
    currencyQuote: string;
}

export interface ForexPairResponse {
    data: Array<ForexPairEntry>;
}

/*
 /cryptocurrencies
 */
export interface CryptocurrencyPairsRequest {
    symbol?: string;
    exchange?: string;
    currencyBase?: string;
    currencyQuote?: string;
    delimiter?: string;
}

export interface CryptocurrencyPairEntry {
    symbol: string;
    availableExchanges: string[];
    currencyBase: string;
    currencyQuote: string;
}

export interface CryptocurrencyPairsResponse {
    data: Array<CryptocurrencyPairEntry>;
}

/*
 /etfs
 */
export interface ETFsRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    delimiter?: string;
    showPlan?: boolean;
    includeDelisted?: boolean;
}

export interface ETFEntry {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    micCode: string;
    country: string;
    figiCode: string;
    cfiCode: string;
    isin: string;
    cusip: string;
    access: {
        global: string;
        plan: string;
    };
}

export interface ETFsResponse {
    data: Array<ETFEntry>;
}

/*
 /funds
 */
export interface FundsRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
    delimiter?: string;
    showPlan?: boolean;
    page?: number;
    outputSize?: number;
}

export interface FundListEntry {
    symbol: string;
    name: string;
    country: string;
    currency: string;
    exchange: string;
    micCode: string;
    type: string;
    figiCode: string;
    cfiCode: string;
    isin: string;
    cusip: string;
    access: {
        global: string;
        plan: string;
    };
}

export interface FundsResponse {
    result: {
        count: number;
        list: Array<FundListEntry>;
    };
}

/*
 /commodities
 */
export interface CommoditiesRequest {
    symbol?: string;
    category?: string;
    delimiter?: string;
}

export interface CommodityEntry {
    category: string;
    description: string;
    name: string;
    symbol: string;
}

export interface CommoditiesResponse {
    data: Array<CommodityEntry>;
}

/*
 /bonds
 */
export interface FixedIncomeRequest {
    symbol?: string;
    exchange?: string;
    country?: string;
    delimiter?: string;
    showPlan?: boolean;
    page?: number;
    outputSize?: number;
}

export interface FixedIncomeListEntry {
    symbol: string;
    name: string;
    country: string;
    currency: string;
    exchange: string;
    micCode: string;
    type: string;
    access: {
        global: string;
        plan: string;
    };
}

export interface FixedIncomeResponse {
    result: {
        count: number;
        list: Array<FixedIncomeListEntry>;
    };
}