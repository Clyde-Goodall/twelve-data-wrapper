import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import { TwelveData } from "../../src/twelveData";
import {getDefaultConfig} from "../../src/defaults";
import { 
    StocksRequest, 
    StocksResponse,
    ETFsRequest,
    ETFsResponse,
    ForexPairsRequest,
    ForexPairResponse,
    CryptocurrencyPairsRequest,
    CryptocurrencyPairsResponse,
    FundsRequest,
    FundsResponse,
    CommoditiesRequest,
    CommoditiesResponse,
    FixedIncomeRequest,
    FixedIncomeResponse
} from "../../src/endpoints/reference/assetCatalogs/assetCatalogs.interfaces";
import { Endpoints } from "../../src/endpoints/endpoints";

describe('Asset Catalogs API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid StocksResponse object", async () => {
        const stocksResponseMockData: StocksResponse = {
            data: [{
                symbol: "AAPL",
                name: "Apple Inc",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                country: "United States",
                type: "Common Stock",
                figiCode: "BBG000B9XRY4",
                cfiCode: "ESVUFR",
                isin: "US0378331005",
                cusip: "037833100",
                access: {
                    global: "Basic",
                    plan: "Basic"
                }
            }]
        };
        const stocksRequestMockData: StocksRequest = {
            symbol: "AAPL",
            exchange: "NASDAQ",
            country: "United States"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Stocks}?symbol=AAPL&exchange=NASDAQ&country=United+States&apikey=demo`)
            .reply(200, stocksResponseMockData);

        const result = await client.reference.assetCatalogs.getStocks(stocksRequestMockData);
        assert.deepEqual(result, stocksResponseMockData)
    });

    it("Should return a valid ETFsResponse object", async () => {
        const etfsResponseMockData: ETFsResponse = {
            data: [{
                symbol: "SPY",
                name: "SPDR S&P 500 ETF Trust",
                currency: "USD",
                exchange: "ARCA",
                micCode: "ARCX",
                country: "United States",
                figiCode: "BBG000BDTBL9",
                cfiCode: "ETVUFR",
                isin: "US78462F1030",
                cusip: "78462F103",
                access: {
                    global: "Basic",
                    plan: "Basic"
                }
            }]
        };
        const etfsRequestMockData: ETFsRequest = {
            symbol: "SPY"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.ETFs}?symbol=SPY&apikey=demo`)
            .reply(200, etfsResponseMockData);

        const result = await client.reference.assetCatalogs.getEtfs(etfsRequestMockData);
        assert.deepEqual(result, etfsResponseMockData)
    });

    it("Should return a valid ForexPairResponse object", async () => {
        const forexPairsResponseMockData: ForexPairResponse = {
            data: [{
                symbol: "EUR/USD",
                availableExchanges: ["FXCM", "OANDA", "FX"],
                currencyBase: "EUR",
                currencyQuote: "USD"
            }]
        };
        const forexPairsRequestMockData: ForexPairsRequest = {
            symbol: "EUR/USD"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.ForexPairs}?symbol=EUR%2FUSD&apikey=demo`)
            .reply(200, forexPairsResponseMockData);

        const result = await client.reference.assetCatalogs.getForexPairs(forexPairsRequestMockData);
        assert.deepEqual(result, forexPairsResponseMockData)
    });

    it("Should return a valid CryptocurrencyPairsResponse object", async () => {
        const cryptocurrencyPairsResponseMockData: CryptocurrencyPairsResponse = {
            data: [{
                symbol: "BTC/USD",
                availableExchanges: ["Binance", "Huobi", "Bitfinex"],
                currencyBase: "BTC",
                currencyQuote: "USD"
            }]
        };
        const cryptocurrencyPairsRequestMockData: CryptocurrencyPairsRequest = {
            symbol: "BTC/USD"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Cryptocurrencies}?symbol=BTC%2FUSD&apikey=demo`)
            .reply(200, cryptocurrencyPairsResponseMockData);

        const result = await client.reference.assetCatalogs.getCryptocurrencyPairs(cryptocurrencyPairsRequestMockData);
        assert.deepEqual(result, cryptocurrencyPairsResponseMockData)
    });

    it("Should return a valid FundsResponse object", async () => {
        const fundsResponseMockData: FundsResponse = {
            result: {
                count: 1,
                list: [{
                    symbol: "VTSAX",
                    name: "Vanguard Total Stock Market Index Fund Admiral Shares",
                    country: "United States",
                    currency: "USD",
                    exchange: "NASDAQ",
                    micCode: "XNGS",
                    type: "Mutual Fund",
                    figiCode: "BBG000B9Y5X2",
                    cfiCode: "EUVUFR",
                    isin: "US9229087690",
                    cusip: "922908769",
                    access: {
                        global: "Basic",
                        plan: "Basic"
                    }
                }]
            }
        };
        const fundsRequestMockData: FundsRequest = {
            symbol: "VTSAX"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Funds}?symbol=VTSAX&apikey=demo`)
            .reply(200, fundsResponseMockData);

        const result = await client.reference.assetCatalogs.getFunds(fundsRequestMockData);
        assert.deepEqual(result, fundsResponseMockData)
    });

    it("Should return a valid CommoditiesResponse object", async () => {
        const commoditiesResponseMockData: CommoditiesResponse = {
            data: [{
                category: "Energy",
                description: "Light Sweet Crude Oil",
                name: "Crude Oil WTI",
                symbol: "WTI"
            }]
        };
        const commoditiesRequestMockData: CommoditiesRequest = {
            symbol: "WTI"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Commodities}?symbol=WTI&apikey=demo`)
            .reply(200, commoditiesResponseMockData);

        const result = await client.reference.assetCatalogs.getCommodities(commoditiesRequestMockData);
        assert.deepEqual(result, commoditiesResponseMockData)
    });

    it("Should return a valid FixedIncomeResponse object", async () => {
        const fixedIncomeResponseMockData: FixedIncomeResponse = {
            result: {
                count: 1,
                list: [{
                    symbol: "US10Y",
                    name: "United States 10-Year Treasury Note",
                    country: "United States",
                    currency: "USD",
                    exchange: "CBOE",
                    micCode: "XCBO",
                    type: "Government Bond",
                    access: {
                        global: "Basic",
                        plan: "Basic"
                    }
                }]
            }
        };
        const fixedIncomeRequestMockData: FixedIncomeRequest = {
            symbol: "US10Y",
            country: "United States"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Bonds}?symbol=US10Y&country=United+States&apikey=demo`)
            .reply(200, fixedIncomeResponseMockData);

        const result = await client.reference.assetCatalogs.getFixedIncome(fixedIncomeRequestMockData);
        assert.deepEqual(result, fixedIncomeResponseMockData)
    });

});