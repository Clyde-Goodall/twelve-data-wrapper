
/*
    /symbol_search
 */

export interface SymbolSearchRequest {
    symbol: string;
    outputSize?: number;
    showPlan?: boolean;
}

export interface SymbolSearchResponse {
    data: {
        symbol: string;
        instrumentName: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
        instrumentType: string;
        country: string;
        currency: string;
        access: {
            global: string;
            plan: string;
        };
    }[];
}

/*
    /cross_listings
 */

export interface CrossListingsRequest {
    symbol: string;
    exchange: string;
    micCode: string;
    country: string;
}

export interface CrossListingsItem {
    exchange: string;
    micCode: string;
    name: string;
    symbol: string;
}

export interface CrossListingsResponse {
    result: {
        count: number;
        list: Array<CrossListingsItem>;
    };
}

/*
    /earliest_timestamp
 */
export interface EarliestTimestampRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    interval?: '1min' | '5min' | '15min' | '30min' | '45min' | '1h' | '2h' | '4h' | '1day' | '1week' | '1month';
    exchange?: string;
    micCode?: string;
    timezone?: string;
}
export interface EarliestTimestampResponse {
    datetime: string;
    unixTime: number;
}