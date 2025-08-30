/*
 * /exchange_rate
 */
export interface ExchangeRateRequest {
    symbol: string;
    date?: string;
    delimiter?: string;
    dp?: number;
    timezone?: string;
}

export interface ExchangeRateResponse {
    symbol: string;
    rate: number;
    timestamp: number;
}

/*
 * /currency_conversion
 */
export interface CurrencyConversionRequest {
    symbol: string;
    amount: number;
    date?: string;
    delimiter?: string;
    dp?: number;
    timezone?: string;
}

export interface CurrencyConversionResponse {
    symbol: string;
    rate: number;
    amount: number;
    timestamp: number;
}

