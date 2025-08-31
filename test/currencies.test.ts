import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import { TwelveData } from "../src/twelveData";
import {getDefaultConfig} from "../src/defaults";
import {
    ExchangeRateRequest,
    ExchangeRateResponse,
    CurrencyConversionRequest,
    CurrencyConversionResponse
} from "../src/endpoints/currencies/currencies.interfaces";
import { Endpoints } from "../src/endpoints/endpoints";

describe('Currencies API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        // Verify that all expected HTTP calls were made
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid ExchangeRateResponse object", async () => {
        const exchangeRateResponseMockData: ExchangeRateResponse = {
            symbol: "USD/EUR",
            rate: 0.85,
            timestamp: 1635724800
        };
        const exchangeRateRequestMockData: ExchangeRateRequest = {
            symbol: "USD/EUR",
            date: "2023-11-01",
            format: "JSON",
            dp: 2,
            timezone: "America/New_York"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.ExchangeRate}?symbol=USD%2FEUR&date=2023-11-01&format=JSON&dp=2&timezone=America%2FNew_York&apikey=demo`)
            .reply(200, exchangeRateResponseMockData);

        const result = await client.currencies.getExchangeRate(exchangeRateRequestMockData);
        assert.deepEqual(result, exchangeRateResponseMockData)
    });

    it("Should return a valid ExchangeRateResponse object with minimal request", async () => {
        const exchangeRateResponseMockData: ExchangeRateResponse = {
            symbol: "GBP/USD",
            rate: 1.25,
            timestamp: 1635724800
        };
        const exchangeRateRequestMockData: ExchangeRateRequest = {
            symbol: "GBP/USD"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.ExchangeRate}?symbol=GBP%2FUSD&apikey=demo`)
            .reply(200, exchangeRateResponseMockData);

        const result = await client.currencies.getExchangeRate(exchangeRateRequestMockData);
        assert.deepEqual(result, exchangeRateResponseMockData)
    });

    it("Should return a valid CurrencyConversionResponse object", async () => {
        const currencyConversionResponseMockData: CurrencyConversionResponse = {
            symbol: "USD/EUR",
            rate: 0.85,
            amount: 85.0,
            timestamp: 1635724800
        };
        const currencyConversionRequestMockData: CurrencyConversionRequest = {
            symbol: "USD/EUR",
            amount: 100,
            date: "2023-11-01",
            format: "JSON",
            dp: 2,
            timezone: "America/New_York"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.CurrencyConversion}?symbol=USD%2FEUR&amount=100&date=2023-11-01&format=JSON&dp=2&timezone=America%2FNew_York&apikey=demo`)
            .reply(200, currencyConversionResponseMockData);

        const result = await client.currencies.getCurrencyConversion(currencyConversionRequestMockData);
        assert.deepEqual(result, currencyConversionResponseMockData)
    });

    it("Should return a valid CurrencyConversionResponse object with minimal request", async () => {
        const currencyConversionResponseMockData: CurrencyConversionResponse = {
            symbol: "EUR/JPY",
            rate: 130.5,
            amount: 1305.0,
            timestamp: 1635724800
        };
        const currencyConversionRequestMockData: CurrencyConversionRequest = {
            symbol: "EUR/JPY",
            amount: 10
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.CurrencyConversion}?symbol=EUR%2FJPY&amount=10&apikey=demo`)
            .reply(200, currencyConversionResponseMockData);

        const result = await client.currencies.getCurrencyConversion(currencyConversionRequestMockData);
        assert.deepEqual(result, currencyConversionResponseMockData)
    });

    // it("Should return a valid CurrencyConversionResponse object with CSV format", async () => {
    //     const currencyConversionResponseMockData: CurrencyConversionResponse = {
    //         symbol: "CAD/USD",
    //         rate: 0.75,
    //         amount: 375.0,
    //         timestamp: 1635724800
    //     };
    //     const currencyConversionRequestMockData: CurrencyConversionRequest = {
    //         symbol: "CAD/USD",
    //         amount: 500,
    //         format: "CSV",
    //         delimiter: ",",
    //         dp: 4
    //     };
    //     const client = new TwelveDataWrapper();
    //     nock(getDefaultConfig().baseUrl!)
    //         .get(`${Endpoints.CurrencyConversion}?symbol=CAD%2FUSD&amount=500&format=CSV&delimiter=%2C&dp=4&apikey=demo`)
    //         .reply(200, currencyConversionResponseMockData);
    //
    //     const result = await client.currencies.getCurrencyConversion(currencyConversionRequestMockData);
    //     assert.deepEqual(result, currencyConversionResponseMockData)
    // });

})