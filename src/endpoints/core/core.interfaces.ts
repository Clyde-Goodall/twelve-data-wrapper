import { Meta, TimeSeriesInterval } from "../shared.interfaces";

export interface TimeSeriesRequest {
    symbol: string;              // Required: Symbol of the asset (e.g. "AAPL", "BTC/USD")
    figi?: string;                // Financial Instrument Global Identifier
    isin?: string;                // International Securities Identification Number
    cusip?: string;               // Committee on Uniform Securities Identification Procedures
    interval: TimeSeriesInterval; // Required: Time interval for the candles (e.g. "1min", "1day")
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