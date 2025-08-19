
export interface Meta {
    symbol: string;
    name?: string;
    interval?: string;
    currency?: string;
    currencyBase?: string;
    currencyQuote?: string;
    exchangeTimezone?: string;
    exchange?: string;
    period?: "Annual" | "Quarterly";
    micCode?: string;
    type?: string;
}

export enum Interval {
    OneMin = "1min",
    FiveMin = "5min",
    FifteenMin = "15min",
    ThirtyMin = "30min",
    FortyFiveMin = "45min",
    OneHour = "1h",
    TwoHour = "2h",
    FourHour = "4h",
    FiveHour = "5h",
    OneDay = "1day",
    OneWeek = "1week",
    OneMonth = "1month"
}

export type SecurityType = 'American Depositary Receipt' | 'Bond' | 'Bond Fund' | 'Closed-end Fund' | 'Common Stock' |
    'Depositary Receipt' | 'Digital Currency' | 'ETF' | 'Exchange-Traded Note' | 'Global Depositary Receipt' |
    'Index' | 'Limited Partnership' | 'Mutual Fund' | 'Physical Currency' | 'Preferred Stock' | 'REIT' |
    'Right' | 'Structured Product' | 'Trust' | 'Unit' | 'Warrant';