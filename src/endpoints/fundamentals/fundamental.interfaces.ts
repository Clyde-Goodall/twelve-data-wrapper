/*
    /logo
*/
export interface LogoRequest {
    symbol: string;
    exchange: string;
    micCode: string;
    country: string;
}

export interface LogoResponse {
    meta: {
        symbol: string;
        exchange: string;
    };
    url: string;
    logoBase: string;
    logoQuote: string;
}

/*
    /profile
*/
export interface ProfileRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface ProfileResponse {
    symbol: string;
    name: string;
    exchange: string;
    mic_code: string;
    sector: string;
    industry: string;
    employees: number;
    website: string;
    description: string;
    type: string;
    CEO: string;
    address: string;
    address2: string;
    city: string;
    zip: string;
    state: string;
    country: string;
    phone: string;
}

/*
    /dividends
*/
export interface DividendsRequest {
    meta: {}
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    range?: "last" | "next" |  "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y" | "full";
    startDate?: string;
    endDate?: string;
    adjust: boolean;
}

export interface DividendsResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
    };
    dividends?: Array<DividendEntry>
}

export interface DividendEntry {
    exDate: string;
    amount: number;
}


/*
    /dividends_calendar
 */
export interface DividendsCalendarRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
    startDate?: string;
    endDate?: string;
    outputSize?: number;
    page?: number;
}

export interface DividendsCalendarResponse {
    dividends: Array<DividendCalendarEntry>
}

export interface DividendCalendarEntry {
    symbol: string;
    micCode: string;
    exchange: string;
    exDate: string;
    amount: number;
}

/*
    /splits
 */
export interface SplitsRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    range?: "last" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y" | "full";
    startDate?: string;
    endDate?: string;
}

export interface SplitsResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
    };
    splits: Array<SplitEntry>;
}

export interface SplitEntry {
    date: string;
    description: string;
    ratio: number;
    fromFactor: number;
    toFactor: number;
}

/*
    /splits_calendar
 */
export interface SplitsCalendarRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    startDate?: string;
    endDate?: string;
    outputSize?: number;
    page?: string;
}

export interface SplitsCalendarResponse {
    splits: Array<SplitCalendarEntry>;
}

export interface SplitCalendarEntry {
    date: string;
    symbol: string;
    micCode: string;
    exchange: string;
    description: string;
    ratio: number;
    fromFactor: number;
    toFactor: number;
}

/*
   /earnings
*/
export interface EarningsRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    type?: 'American Depositary Receipt' | 'Bond' | 'Bond Fund' | 'Closed-end Fund' | 'Common Stock' |
        'Depositary Receipt' | 'Digital Currency' | 'ETF' | 'Exchange-Traded Note' |
        'Global Depositary Receipt' | 'Limited Partnership' | 'Mutual Fund' | 'Physical Currency' |
        'Preferred Stock' | 'REIT' | 'Right' | 'Structured Product' | 'Trust' | 'Unit' | 'Warrant';
    period?: 'latest' | 'next';
    outputSize?: number;
    format?: 'JSON' | 'CSV';
    delimiter?: string;
    dp?: number;
    startDate?: string;
    endDate?: string;
}

export interface EarningsResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchangeTimezone: string;
    };
    earnings: Array<EarningEntry>;
}

export interface EarningEntry {
    date: string;
    time: string;
    epsEstimate: number;
    epsActual: number;
    difference: number;
    surprisePrc: number;
}

/*
    /earnings_calendar
 */
export interface EarningsCalendarRequest {
    exchange?: string;
    micCode?: string;
    country?: string;
    format?: 'JSON' | 'CSV';
    delimiter?: string;
    dp?: number;
    startDate?: string;
    endDate?: string;
}

export interface EarningsCalendarResponse {
    earnings: {
        [key: string]: Array<EarningsCalendarEntry>;
    }
}

export interface EarningsCalendarEntry {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    micCode: string;
    country: string;
    time: string;
    epsEstimate: number;
    epsActual: number;
    difference: number;
    surprisePrc: number;
}

/*
    /ipo_calendar
 */

export interface IPOCalendarRequest {
    exchange?: string;
    micCode?: string;
    country?: string;
    startDate?: string;
    endDate?: string;
}

export interface IPOCalendarResponse {
    [key: string]: Array<IPOCalendarEntry>
}

export interface IPOCalendarEntry {
    symbol: string;
    name: string;
    exchange: string;
    micCode: string;
    priceRangeLow: number;
    priceRangeHigh: number;
    offerPrice: number;
    currency: string;
    shares: number;
}

/*
    /statistics
    So long lmaoooo
 */
export interface StatisticsRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    mic_code?: string;
    country?: string;
}

export interface StatisticsValuationMetrics {
    marketCapitalization: number;
    enterpriseValue: number;
    trailingPE: number;
    forwardPE: number;
    pegRatio: number;
    priceToSalesTTM: number;
    priceToBookMRQ: number;
    enterpriseToRevenue: number;
    enterpriseToEBITDA: number;
}

export interface StatisticsFinancialsIncomeStatement {
    revenueTTM: number;
    revenuePerShareTTM: number;
    quarterlyRevenueGrowth: number;
    grossProfitTTM: number;
    ebitda: number;
    netIncomeToCommonTTM: number;
    dilutedEpsTTM: number;
    quarterlyEarningsGrowthYoY: number;
}

export interface StatisticsFinancialsBalanceSheet {
    totalCashMRQ: number;
    totalCashPerShareMRQ: number;
    totalDebtMRQ: number;
    totalDebtToEquityMRQ: number;
    currentRatioMRQ: number;
    bookValuePerShareMRQ: number;
}

export interface StatisticsFinancialsCashFlow {
    operatingCashFlowTTM: number;
    leveredFreeCashFlowTTM: number;
}

export interface StatisticsFinancials {
    fiscalYearEnds: string;
    mostRecentQuarter: string;
    grossMargin: number;
    profitMargin: number;
    operatingMargin: number;
    returnOnAssetsTTM: number;
    returnOnEquityTTM: number;
    incomeStatement: StatisticsFinancialsIncomeStatement;
    balanceSheet: StatisticsFinancialsBalanceSheet;
    cashFlow: StatisticsFinancialsCashFlow;
}

export interface StatisticsStockStats {
    sharesOutstanding: number;
    floatShares: number;
    avgTenVolume: number;
    avgNinetyVolume: number;
    sharesShort: number;
    shortRatio: number;
    shortPercentOfSharesOutstanding: number;
    percentHeldByInsiders: number;
    percentHeldByInstitutions: number;
}

export interface StatisticsPriceSummary {
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekChange: number;
    beta: number;
    dayFiftyMA: number;
    dayTwoHundredMA: number;
}

export interface StatisticsDividendsSplits {
    forwardAnnualDividendRate: number;
    forwardAnnualDividendYield: number;
    trailingAnnualDividendRate: number;
    trailingAnnualDividendYield: number;
    fiveYearAverageDividendYield: number;
    payoutRatio: number;
    dividendFrequency: string;
    dividendDate: string;
    exDividendDate: string;
    lastSplitFactor: string;
    lastSplitDate: string;
}

export interface StatisticsResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
    };
    statistics: {
        valuationMetrics: StatisticsValuationMetrics;
        financials: StatisticsFinancials;
        stockStatistics: StatisticsStockStats;
        stockPriceSummary: StatisticsPriceSummary;
        dividendsAndSplits: StatisticsDividendsSplits;
    };
}

/*
    /income_statement
 */
export interface IncomeStatementRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    period?: 'annual' | 'quarterly';
    startDate?: string;
    endDate?: string;
    outputSize?: number;
}

export interface IncomeStatementMeta {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    micCode: string;
    exchangeTimezone: string;
    period: string;
}

export interface OperatingExpense {
    researchAndDevelopment: number;
    sellingGeneralAndAdministrative: number;
    otherOperatingExpenses: number;
}

export interface NonOperatingInterest {
    income: number;
    expense: number;
}

export interface IncomeStatementEntry {
    fiscalDate: string;
    quarter: number;
    year: number;
    sales: number;
    costOfGoods: number;
    grossProfit: number;
    operatingExpense: OperatingExpense;
    operatingIncome: number;
    nonOperatingInterest: NonOperatingInterest;
    otherIncomeExpense: number;
    pretaxIncome: number;
    incomeTax: number;
    netIncome: number;
    epsBasic: number;
    epsDiluted: number;
    basicSharesOutstanding: number;
    dilutedSharesOutstanding: number;
    ebit: number;
    ebitda: number;
    netIncomeContinuousOperations: number;
    minorityInterests: number;
    preferredStockDividends: number;
}

export interface IncomeStatementResponse {
    meta: IncomeStatementMeta;
    incomeStatement: Array<IncomeStatementEntry>;
}

/*
    /income_statement/consolidated
 */
export interface IncomeStatementConsolidatedRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    period?: 'annual' | 'quarterly';
    startDate?: string;
    endDate?: string;
    outputSize?: number;
}

export interface Revenue {
    totalRevenue: number;
    operatingRevenue: number;
}

export interface CostOfRevenue {
    costOfRevenueValue: number;
    exciseTaxes: number;
    reconciledCostOfRevenue: number;
}

export interface GrossProfit {
    grossProfitValue: number;
    costOfRevenue: CostOfRevenue;
}

export interface OperatingIncome {
    operatingIncomeValue: number;
    totalOperatingIncomeAsReported: number;
    operatingExpense: number;
    otherOperatingExpenses: number;
    totalExpenses: number;
}

export interface NetIncome {
    netIncomeValue: number;
    netIncomeCommonStockholders: number;
    netIncomeIncludingNoncontrollingInterests: number;
    netIncomeFromTaxLossCarryforward: number;
    netIncomeExtraordinary: number;
    netIncomeDiscontinuousOperations: number;
    netIncomeContinuousOperations: number;
    netIncomeFromContinuingOperationNetMinorityInterest: number;
    netIncomeFromContinuingAndDiscontinuedOperation: number;
    normalizedIncome: number;
    minorityInterests: number;
}

export interface EarningsPerShare {
    dilutedEps: number;
    basicEps: number;
    continuingAndDiscontinuedDilutedEps: number;
    continuingAndDiscontinuedBasicEps: number;
    normalizedDilutedEps: number;
    normalizedBasicEps: number;
    reportedNormalizedDilutedEps: number;
    reportedNormalizedBasicEps: number;
    dilutedEpsOtherGainsLosses: number;
    taxLossCarryforwardDilutedEps: number;
    dilutedAccountingChange: number;
    dilutedExtraordinary: number;
    dilutedDiscontinuousOperations: number;
    dilutedContinuousOperations: number;
    basicEpsOtherGainsLosses: number;
    taxLossCarryforwardBasicEps: number;
    basicAccountingChange: number;
    basicExtraordinary: number;
    basicDiscontinuousOperations: number;
    basicContinuousOperations: number;
    dilutedNiAvailToCommonStockholders: number;
    averageDilutionEarnings: number;
}

export interface Expenses {
    totalExpenses: number;
    sellingGeneralAndAdministrationExpense: number;
    sellingAndMarketingExpense: number;
    generalAndAdministrativeExpense: number;
    otherGeneralAndAdministrativeExpense: number;
    depreciationAmortizationDepletionIncomeStatement: number;
    researchAndDevelopmentExpense: number;
    insuranceAndClaimsExpense: number;
    rentAndLandingFees: number;
    salariesAndWagesExpense: number;
    rentExpenseSupplemental: number;
    provisionForDoubtfulAccounts: number;
}

export interface InterestIncomeAndExpense {
    interestIncome: number;
    interestExpense: number;
    netInterestIncome: number;
    netNonOperatingInterestIncomeExpense: number;
    interestExpenseNonOperating: number;
    interestIncomeNonOperating: number;
}

export interface OtherIncomeAndExpenses {
    otherIncomeExpense: number;
    otherNonOperatingIncomeExpenses: number;
    specialIncomeCharges: number;
    gainOnSaleOfPpe: number;
    gainOnSaleOfBusiness: number;
    gainOnSaleOfSecurity: number;
    otherSpecialCharges: number;
    writeOff: number;
    impairmentOfCapitalAssets: number;
    restructuringAndMergerAcquisition: number;
    securitiesAmortization: number;
    earningsFromEquityInterest: number;
    earningsFromEquityInterestNetOfTax: number;
    totalOtherFinanceCost: number;
}

export interface Taxes {
    taxProvision: number;
    taxEffectOfUnusualItems: number;
    taxRateForCalculations: number;
    otherTaxes: number;
}

export interface DepreciationAndAmortization {
    depreciationAmortizationDepletion: number;
    amortizationOfIntangibles: number;
    depreciation: number;
    amortization: number;
    depletion: number;
    depreciationAndAmortizationInIncomeStatement: number;
}

export interface Ebitda {
    ebitdaValue: number;
    normalizedEbitdaValue: number;
    ebitValue: number;
}

export interface DividendsAndShares {
    dividendPerShare: number;
    dilutedAverageShares: number;
    basicAverageShares: number;
    preferredStockDividends: number;
    otherUnderPreferredStockDividend: number;
}

export interface UnusualItems {
    totalUnusualItems: number;
    totalUnusualItemsExcludingGoodwill: number;
}

export interface Depreciation {
    reconciledDepreciation: number;
}

export interface PretaxIncome {
    pretaxIncomeValue: number;
}

export interface SpecialIncomeCharges {
    specialIncomeChargesValue: number;
}

export interface IncomeStatementConsolidatedEntry {
    fiscalDate: string;
    year: number;
    revenue: Revenue;
    grossProfit: GrossProfit;
    operatingIncome: OperatingIncome;
    netIncome: NetIncome;
    earningsPerShare: EarningsPerShare;
    expenses: Expenses;
    interestIncomeAndExpense: InterestIncomeAndExpense;
    otherIncomeAndExpenses: OtherIncomeAndExpenses;
    taxes: Taxes;
    depreciationAndAmortization: DepreciationAndAmortization;
    ebitda: Ebitda;
    dividendsAndShares: DividendsAndShares;
    unusualItems: UnusualItems;
    depreciation: Depreciation;
    pretaxIncome: PretaxIncome;
    specialIncomeCharges: SpecialIncomeCharges;
}

export interface IncomeStatementConsolidatedResponse {
    incomeStatement: Array<IncomeStatementConsolidatedEntry>;
}


/*
    /balance_sheet
    oh my god they're so long lmao
 */
export interface BalanceSheetRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    period?: 'annual' | 'quarterly';
    startDate?: string;
    endDate?: string;
    outputSize?: number;
}

export interface BalanceSheetMeta {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    micCode: string;
    exchangeTimezone: string;
    period: string;
}

export interface CurrentAssets {
    cash: number;
    cashEquivalents: number;
    cashAndCashEquivalents: number;
    otherShortTermInvestments: number;
    accountsReceivable: number;
    otherReceivables: number;
    inventory: number;
    prepaidAssets: number;
    restrictedCash: number;
    assetsHeldForSale: number;
    hedgingAssets: number;
    otherCurrentAssets: number;
    totalCurrentAssets: number;
}

export interface NonCurrentAssets {
    properties: number;
    landAndImprovements: number;
    machineryFurnitureEquipment: number;
    constructionInProgress: number;
    leases: number;
    accumulatedDepreciation: number;
    goodwill: number;
    investmentProperties: number;
    financialAssets: number;
    intangibleAssets: number;
    investmentsAndAdvances: number;
    otherNonCurrentAssets: number;
    totalNonCurrentAssets: number;
}

export interface AssetsSection {
    currentAssets: CurrentAssets;
    nonCurrentAssets: NonCurrentAssets;
    totalAssets: number;
}

export interface CurrentLiabilities {
    accountsPayable: number;
    accruedExpenses: number;
    shortTermDebt: number;
    deferredRevenue: number;
    taxPayable: number;
    pensions: number;
    otherCurrentLiabilities: number;
    totalCurrentLiabilities: number;
}

export interface NonCurrentLiabilities {
    longTermProvisions: number;
    longTermDebt: number;
    provisionForRisksAndCharges: number;
    deferredLiabilities: number;
    derivativeProductLiabilities: number;
    otherNonCurrentLiabilities: number;
    totalNonCurrentLiabilities: number;
}

export interface LiabilitiesSection {
    currentLiabilities: CurrentLiabilities;
    nonCurrentLiabilities: NonCurrentLiabilities;
    totalLiabilities: number;
}

export interface ShareholdersEquity {
    commonStock: number;
    retainedEarnings: number;
    otherShareholdersEquity: number;
    totalShareholdersEquity: number;
    additionalPaidInCapital: number;
    treasuryStock: number;
    minorityInterest: number;
}

export interface BalanceSheetEntry {
    fiscalDate: string;
    year: number;
    assets: AssetsSection;
    liabilities: LiabilitiesSection;
    shareholdersEquity: ShareholdersEquity;
}

export interface BalanceSheetResponse {
    meta: BalanceSheetMeta;
    balanceSheet: Array<BalanceSheetEntry>;
}

/*
    /cash_flow
*/
export interface CashFlowRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    period?: 'annual' | 'quarterly';
    startDate?: string;
    endDate?: string;
    outputSize?: number;
}

export interface OperatingActivities {
    netIncome: number;
    depreciation: number;
    deferredTaxes: number;
    stockBasedCompensation: number;
    otherNonCashItems: number;
    accountsReceivable: number;
    accountsPayable: number;
    otherAssetsLiabilities: number;
    operatingCashFlow: number;
}

export interface InvestingActivities {
    capitalExpenditures: number;
    netIntangibles: number;
    netAcquisitions: number;
    purchaseOfInvestments: number;
    saleOfInvestments: number;
    otherInvestingActivity: number;
    investingCashFlow: number;
}

export interface FinancingActivities {
    longTermDebtIssuance: number;
    longTermDebtPayments: number;
    shortTermDebtIssuance: number;
    commonStockIssuance: number;
    commonStockRepurchase: number;
    commonDividends: number;
    otherFinancingCharges: number;
    financingCashFlow: number;
}

export interface CashFlowEntry {
    fiscalDate: string;
    quarter: string;
    year: number;
    operatingActivities: OperatingActivities;
    investingActivities: InvestingActivities;
    financingActivities: FinancingActivities;
    endCashPosition: number;
    incomeTaxPaid: number;
    interestPaid: number;
    freeCashFlow: number;
}

export interface CashFlowResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
        period: string;
    };
    cashFlow: Array<CashFlowEntry>;
}

/*
    /cash_flow/consolidated
 */
export interface CashFlowConsolidatedRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    period?: 'annual' | 'quarterly';
    startDate?: string;
    endDate?: string;
    outputSize?: number;
}

export interface CashFlowFromOperatingActivities {
    netIncomeFromContinuingOperations: number;
    operatingCashFlow: number;
    cashFlowFromContinuingOperatingActivities: number;
    cashFromDiscontinuedOperatingActivities: number;
    cashFlowFromDiscontinuedOperation: number;
    freeCashFlow: number;
    cashFlowsFromUsedInOperatingActivitiesDirect: number;
    taxesRefundPaid: number;
    taxesRefundPaidDirect: number;
    interestReceived: number;
    interestReceivedDirect: number;
    interestPaid: number;
    interestPaidDirect: number;
    dividendReceived: number;
    dividendReceivedDirect: number;
    dividendPaid: number;
    dividendPaidDirect: number;
    changeInWorkingCapital: number;
    changeInOtherWorkingCapital: number;
    changeInReceivables: number;
    changesInAccountReceivables: number;
    changeInPayablesAndAccruedExpense: number;
    changeInAccruedExpense: number;
    changeInPayable: number;
    changeInDividendPayable: number;
    changeInAccountPayable: number;
    changeInTaxPayable: number;
    changeInIncomeTaxPayable: number;
    changeInInterestPayable: number;
    changeInOtherCurrentLiabilities: number;
    changeInOtherCurrentAssets: number;
    changeInInventory: number;
    changeInPrepaidAssets: number;
    otherNonCashItems: number;
    excessTaxBenefitFromStockBasedCompensation: number;
    stockBasedCompensation: number;
    unrealizedGainLossOnInvestmentSecurities: number;
    provisionAndWriteOffOfAssets: number;
    assetImpairmentCharge: number;
    amortizationOfSecurities: number;
    deferredTax: number;
    deferredIncomeTax: number;
    depreciationAmortizationDepletion: number;
    depletion: number;
    depreciationAndAmortization: number;
    amortizationCashFlow: number;
    amortizationOfIntangibles: number;
    depreciation: number;
    operatingGainsLosses: number;
    pensionAndEmployeeBenefitExpense: number;
    earningsLossesFromEquityInvestments: number;
    gainLossOnInvestmentSecurities: number;
    netForeignCurrencyExchangeGainLoss: number;
    gainLossOnSaleOfPpe: number;
    gainLossOnSaleOfBusiness: number;
}

export interface CashFlowFromInvestingActivities {
    investingCashFlow: number;
    cashFlowFromContinuingInvestingActivities: number;
    cashFromDiscontinuedInvestingActivities: number;
    netOtherInvestingChanges: number;
    interestReceivedCfi: number;
    dividendsReceivedCfi: number;
    netInvestmentPurchaseAndSale: number;
    saleOfInvestment: number;
    purchaseOfInvestment: number;
    netInvestmentPropertiesPurchaseAndSale: number;
    saleOfInvestmentProperties: number;
    purchaseOfInvestmentProperties: number;
    netBusinessPurchaseAndSale: number;
    saleOfBusiness: number;
    purchaseOfBusiness: number;
    netIntangiblesPurchaseAndSale: number;
    saleOfIntangibles: number;
    purchaseOfIntangibles: number;
    netPpePurchaseAndSale: number;
    saleOfPpe: number;
    purchaseOfPpe: number;
    capitalExpenditureReported: number;
    capitalExpenditure: number;
}

export interface CashFlowFromFinancingActivities {
    financingCashFlow: number;
    cashFlowFromContinuingFinancingActivities: number;
    cashFromDiscontinuedFinancingActivities: number;
    netOtherFinancingCharges: number;
    interestPaidCff: number;
    proceedsFromStockOptionExercised: number;
    cashDividendsPaid: number;
    preferredStockDividendPaid: number;
    commonStockDividendPaid: number;
    netPreferredStockIssuance: number;
    preferredStockPayments: number;
    preferredStockIssuance: number;
    netCommonStockIssuance: number;
    commonStockPayments: number;
    commonStockIssuance: number;
    repurchaseOfCapitalStock: number;
    netIssuancePaymentsOfDebt: number;
    netShortTermDebtIssuance: number;
    shortTermDebtPayments: number;
    shortTermDebtIssuance: number;
    netLongTermDebtIssuance: number;
    longTermDebtPayments: number;
    longTermDebtIssuance: number;
    issuanceOfDebt: number;
    repaymentOfDebt: number;
    issuanceOfCapitalStock: number;
}

export interface SupplementalData {
    interestPaidSupplementalData: number;
    incomeTaxPaidSupplementalData: number;
}

export interface ForeignAndDomesticSales {
    foreignSales: number;
    domesticSales: number;
    adjustedGeographySegmentData: number;
}

export interface CashPosition {
    beginningCashPosition: number;
    endCashPosition: number;
    changesInCash: number;
    otherCashAdjustmentOutsideChangeInCash: number;
    otherCashAdjustmentInsideChangeInCash: number;
    effectOfExchangeRateChanges: number;
}

export interface DirectMethodCashFlow {
    classesOfCashReceiptsFromOperatingActivities: number;
    otherCashReceiptsFromOperatingActivities: number;
    receiptsFromGovernmentGrants: number;
    receiptsFromCustomers: number;
    classesOfCashPayments: number;
    otherCashPaymentsFromOperatingActivities: number;
    paymentsOnBehalfOfEmployees: number;
    paymentsToSuppliersForGoodsAndServices: number;
}

export interface CashFlowConsolidatedEntry {
    fiscalDate: string;
    cashFlowFromOperatingActivities: CashFlowFromOperatingActivities;
    cashFlowFromInvestingActivities: CashFlowFromInvestingActivities;
    cashFlowFromFinancingActivities: CashFlowFromFinancingActivities;
    supplementalData: SupplementalData;
    foreignAndDomesticSales: ForeignAndDomesticSales;
    cashPosition: CashPosition;
    directMethodCashFlow: DirectMethodCashFlow;
}

export interface CashFlowConsolidatedResponse {
    cashFlow: Array<CashFlowConsolidatedEntry>;
}

/*
    /market_cap
*/
export interface MarketCapRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    outputsize?: number;
}

export interface MarketCapEntry {
    date: string;
    value: number;
}

export interface MarketCapResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
    };
    marketCap: Array<MarketCapEntry>;
}

/*
    /key_executives
*/
export interface KeyExecutivesRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    micCode?: string;
    country?: string;
}

export interface KeyExecutiveEntry {
    name: string;
    title: string;
    age: number;
    yearBorn: number;
    pay: number;
}

export interface KeyExecutivesResponse {
    meta: {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        micCode: string;
        exchangeTimezone: string;
    };
    keyExecutives: Array<KeyExecutiveEntry>;
}