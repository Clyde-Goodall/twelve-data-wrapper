import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import TwelveDataWrapper from "../src/twelveDataWrapper";
import {getDefaultConfig} from "../src/defaults";


describe('Analysis API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return plan usage object with default (empty) config", async () => {
        const apiUsageResponseMockData: any = {
            timestamp: '2021-01-01T00:00:00Z',
            currentUsage: 100,
            planLimit: 1000
        }
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/usage?apikey=demo`) // with no config it should only be appending the apikey
        const usage = await client.advanced.APIUsage();
        assert.deepEqual(usage, apiUsageResponseMockData)
    })
})