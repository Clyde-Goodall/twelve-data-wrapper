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

export const enum Interval {
    OneMin = "1min",
    FiveMin = "5min",
    FifteenMin = "15min",
    ThirtyMin = "30min",
    FortyFiveMin = "45min",
    OneHour = "1h",
    TwoHour = "2h",
    FourHour = "4h",
    OneDay = "1day",
    OneWeek = "1week",
    OneMonth = "1month"
}

export const enum SecurityType {
    AmericanDepositaryReceipt = "American Depositary Receipt",
    Bond = "Bond",
    BondFund = "Bond Fund",
    ClosedEndFund = "Closed-end Fund",
    CommonStock = "Common Stock",
    DepositaryReceipt = "Depositary Receipt",
    DigitalCurrency = "Digital Currency",
    ETF = "ETF",
    ExchangeTradedNote = "Exchange-Traded Note",
    GlobalDepositaryReceipt = "Global Depositary Receipt",
    Index = "Index",
    LimitedPartnership = "Limited Partnership",
    MutualFund = "Mutual Fund",
    PhysicalCurrency = "Physical Currency",
    PreferredStock = "Preferred Stock",
    REIT = "REIT",
    Right = "Right",
    StructuredProduct = "Structured Product",
    Trust = "Trust",
    Unit = "Unit",
    Warrant = "Warrant"
}

export const enum TimeRange {
    Last = "last",
    Next = "next",
    OneMonth = "1m",
    ThreeMonths = "3m",
    SixMonths = "6m",
    YearToDate = "ytd",
    OneYear = "1y",
    TwoYears = "2y",
    FiveYears = "5y",
    Full = "full"
}

export const enum AssetClassType {
    americanDepositaryReceipt = "American Depositary Receipt",
    bond = "Bond",
    bondFund = "Bond Fund",
    closedEndFund = "Closed-end Fund",
    commonStock = "Common Stock",
    depositaryReceipt = "Depositary Receipt",
    digitalCurrency = "Digital Currency",
    etf = "ETF",
    exchangeTradedNote = "Exchange-Traded Note",
    globalDepositaryReceipt = "Global Depositary Receipt",
    limitedPartnership = "Limited Partnership",
    mutualFund = "Mutual Fund",
    physicalCurrency = "Physical Currency",
    preferredStock = "Preferred Stock",
    reit = "REIT",
    right = "Right",
    structuredProduct = "Structured Product",
    trust = "Trust",
    unit = "Unit",
    warrant = "Warrant"
}

export type DecimalPlaces = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type ReqSortOrder = 'asc' | 'desc';

export type ResponseFormat = 'json' | 'csv';

// Utility type that makes at least one of the specified keys required
export type AtLeastOne<T, Keys extends keyof T> = Omit<T, Keys> & {
    [K in Keys]: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
