
/*
    /exchanges
 */
export interface ExchangesRequest {
    type?: "American Depositary Receipt" | "Bond" | "Bond Fund" | "Closed-end Fund" | "Common Stock" | "Depositary Receipt" | "Digital Currency" | "ETF" | "Exchange-Traded Note" | "Global Depositary Receipt" | "Limited Partnership" | "Mutual Fund" | "Physical Currency" | "Preferred Stock" | "REIT" | "Right" | "Structured Product" | "Trust" | "Unit" | "Warrant";
    name?: string;
    code?: string;
    country?: string;
    format?: "JSON" | "CSV";
    delimiter?: string;
    showPlan?: boolean;
}

export interface ExchangeData {
    title: string;
    name: string;
    code: string;
    country: string;
    timezone: string;
    access: {
        global: string;
        plan: string;
    };
}

export interface ExchangesResponse {
    data: Array<ExchangeData>;
}

/*
    /exchange_schedule
 */

export interface ExchangeScheduleRequest {
    date?: string;
    micName?: string;
    micCode?: string;
    country?: string;
}

export interface ExchangeScheduleSession {
    openTime: string;
    closeTime: string;
    sessionName: string;
    sessionType: string;
}

export interface ExchangeScheduleData {
    title: string;
    name: string;
    code: string;
    country: string;
    timeZone: string;
    sessions: Array<ExchangeScheduleSession>;
}

export interface ExchangeScheduleResponse {
    data: Array<ExchangeScheduleData>;
}

/*
    /cryptocurrency_exchanges
 */
export interface CryptocurrencyExchangesRequest {
    format?: "JSON" | "CSV";
    delimiter?: string;
}

export interface CryptocurrencyExchangeeResponse {
    data: Array<{
        name: string;
    }>;
}

/*
    /market_state
 */
export interface MarketStateRequest {
    exchange?: string;
    code?: string;
    country?: string;
}

export interface MarketStateData {
    name: string;
    code: string;
    country: string;
    isMarketOpen: boolean;
    timeAfterOpen: string;
    timeToOpen: string;
    timeToClose: string;
}

export interface MarketStateResponse extends Array<MarketStateData> { }