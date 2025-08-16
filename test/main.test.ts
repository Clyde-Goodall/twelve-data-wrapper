import { describe, it } from "node:test";
import assert from "node:assert";
import type {TwelveDataConfig} from "../src/types/config.ts";
import TwelveDataWrapper from "../src/twelveDataWrapper.ts";
import {configDefaults} from "../src/defaults/index.ts";
import Advanced from "../src/endpoints/advanced.ts";
import Analysis from "../src/endpoints/analysis.ts";
import Core from "../src/endpoints/core.ts";
import Currencies from "../src/endpoints/currencies.ts";
import ETFs from "../src/endpoints/etfs.ts";
import Fundamentals from "../src/endpoints/fundamentals.ts";
import MutualFunds from "../src/endpoints/mutualFunds.ts";
import Reference from "../src/endpoints/reference.ts";
import Regulatory from "../src/endpoints/regulatory.ts";
import TechnicalIndicators from "../src/endpoints/technicalIndicators.ts";

// @ts-ignore
const testConfig: TwelveDataConfig = {
    apiKey: 'not-demo',
    debugMode: true,
    baseUrl: 'https://not-the-api.twelvedata.com',
    timeout: 1,
    retryCount: 10,
    retryWaitTime: 0
}

describe("TwelveData Class constructor initialization", () => {
    it("Should return the TwelveData instance with default config options", () => {
        const client = new TwelveDataWrapper({apiKey: 'demo'});
        assert.strictEqual(client instanceof TwelveDataWrapper, true);
        assert.strictEqual(client.advanced instanceof Advanced, true);
        assert.strictEqual(client.analysis instanceof Analysis, true);
        assert.strictEqual(client.core instanceof Core, true);
        assert.strictEqual(client.currencies instanceof Currencies, true);
        assert.strictEqual(client.etfs instanceof ETFs, true);
        assert.strictEqual(client.fundamentals instanceof Fundamentals, true);
        assert.strictEqual(client.mutualFunds instanceof MutualFunds, true);
        assert.strictEqual(client.reference instanceof Reference, true);
        assert.strictEqual(client.regulatory instanceof Regulatory, true);
        assert.strictEqual(client.technicalIndicators instanceof TechnicalIndicators, true);
    });
    it("Should return the TwelveData instance with custom config options", () => {
        const client = new TwelveDataWrapper(testConfig);
        assert.strictEqual(client instanceof TwelveDataWrapper, true);
        assert.strictEqual(client.advanced instanceof Advanced, true);
        assert.strictEqual(client.analysis instanceof Analysis, true);
        assert.strictEqual(client.core instanceof Core, true);
        assert.strictEqual(client.currencies instanceof Currencies, true);
        assert.strictEqual(client.etfs instanceof ETFs, true);
        assert.strictEqual(client.fundamentals instanceof Fundamentals, true);
        assert.strictEqual(client.mutualFunds instanceof MutualFunds, true);
        assert.strictEqual(client.reference instanceof Reference, true);
        assert.strictEqual(client.regulatory instanceof Regulatory, true);
        assert.strictEqual(client.technicalIndicators instanceof TechnicalIndicators, true);
    });
})

