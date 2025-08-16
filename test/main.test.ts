import { describe, it } from "node:test";
import assert from "node:assert";
import type {TwelveDataConfig} from "../src/types/config.ts";
import TwelveDataWrapper from "../src/index.ts";
import {configDefaults} from "../src/defaults/index.ts";

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
        const client = new TwelveDataWrapper({apiKey: 'demo'} as TwelveDataConfig);
        assert.strictEqual(client instanceof TwelveDataWrapper, true);
        assert.deepEqual(client.config, configDefaults)
    });
    it("Should return the TwelveData instance with custom config options", () => {
        const client = new TwelveDataWrapper(testConfig);
        assert.strictEqual(client instanceof TwelveDataWrapper, true);
        assert.deepEqual(client.config, testConfig)
    });
})

