import { DecimalPlaces, Interval, Meta, ReqSortOrder } from '../shared.interfaces';

export interface TimeSeriesRequest {
    symbol?: string;              // Required: Symbol of the asset (e.g. "AAPL", "BTC/USD")
    figi?: string;                // Financial Instrument Global Identifier
    isin?: string;                // International Securities Identification Number
    cusip?: string;               // Committee on Uniform Securities Identification Procedures
    interval: Interval;         // Required: Time interval for the candles (e.g. "1min", "1day")
    exchange?: string;            // Exchange code (e.g. "NASDAQ", "Binance")
    micCode?: string;             // Market Identifier Code (e.g. "XNAS" for NASDAQ)
    country?: string;             // Country code (e.g. "US" or "United States")
    type?: string;                // Type of asset (e.g. "Digital currency", "Common stock")
    outputSize?: number;          // Number of candles to return (default is 30, max is 5000)
    prePost?: boolean;            // Include pre/post market data (default is false)
    dp?: number;                  // Number of decimal places for float values. Supports 0-11, default is -1 (API automatically determines precision)
    order?: string;               // Sorting order for the results "asc" and "desc" (default is "desc")
    timezone?: string;            // Timezone for the response (e.g. "America/New_York", "UTC"). Defaults to "Exchange"
    date?: Date;                  // Specific day to fetch data for (time is ignored)
    startDate?: Date;             // Time when the series starts
    endDate?: Date;               // Time when the series ends
    previousClose?: boolean;      // Include previous close price in the response (default is false)
    adjust?: string;              // Adjusting mode for prices ("none", "dividends", "splits", "all"). Default is "none"
}



export interface TimeSeriesResponse {
    meta: Meta;
    values: TimeSeriesCandle[];
}

export interface TimeSeriesCandle {
    dateTime: Date;
    open: string;
    close: string;
    high: string;
    low: string;
    volume: string;
}

type TSCrossInterval = Exclude<Interval, Interval.FiveHour>;
export interface TimeSeriesCrossRequest {
    // Required: Base currency (e.g. "USD" or "BTC")
    base: string;
    // Type of the base currency (e.g. "Physical Currency")
    baseType?: string;
    // Exchange for the base currency (e.g. "Binance")
    baseExchange?: string;
    // Market Identifier Code for the base currency (e.g. "XNAS" for NASDAQ)
    baseMicCode?: string;
    // Required: Quote currency (e.g. "USD" or "BTC")
    quote: string;
    // Type of the quote currency (e.g. "Physical Currency")
    quoteType?: string;
    // Exchange for the quote currency (e.g. "Binance")
    quoteExchange?: string;
    // Market Identifier Code for the quote currency (e.g. "XNAS" for NASDAQ)
    quoteMicCode?: string;
    // Required: Interval between two consecutive points in time series
    interval: TSCrossInterval;
    // Number of candles to return (default is 30, max is 5000)
    outputSize?: number;
    // Response format, either "JSON" or "CSV" (default is "JSON")
    format?: 'JSON' | 'CSV';
    // Delimiter for CSV format (default is ";")
    delimiter?: string;
    // Include pre/post market data (default is false)
    prePost?: boolean;
    // Number of decimal places for float values. Supports 0-11, default is 5, -1 is API automatically determines precision
    dp?: DecimalPlaces;
    // Timezone for the response (e.g. "America/New_York", "UTC"). Defaults to "Exchange"
    timezone?: string;
    // Time when the series starts
    startDate?: Date;
    // Time when the series ends
    endDate?: Date;
    // Specifies if there should be an adjustment (default is true)
    adjust?: boolean;

}

export interface TimeSeriesCrossMeta {
    baseInstrument: string;
    baseCurrency: string;
    baseExchange: string;
    interval: TSCrossInterval;
    quoteInstrument: string;
    quoteCurrency: string;
    quoteExchange: string;
}

export interface TimeSeriesCrossValue {
    dateTime: Date;
    open: string;
    close: string;
    high: string;
    low: string;
}

export interface TimeSeriesCrossResponse {
    meta: TimeSeriesCrossMeta;
    values: TimeSeriesCrossValue[];
}