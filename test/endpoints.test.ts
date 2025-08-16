import {describe, it, beforeEach, afterEach} from "node:test";
import assert from "node:assert";
import nock from "nock";
import TwelveDataWrapper from "../src/index.ts";


describe('Endpoint response testing', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        // Verify that all expected HTTP calls were made
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return plan usage object with default (empty) config", async () => {
        const mockUsageData = {
            timestamp: '2021-01-01T00:00:00Z',
            currentUsage: 100,
            planLimit: 1000
        }
        const client = new TwelveDataWrapper();
        nock(client.config.baseUrl)
            .get(`/usage?${client.buildURLParams()}`) // with no config it should only be appending the apikey
            .reply(200, mockUsageData);

        const usage = await client.APIUsage();
        assert.deepEqual(usage, mockUsageData)
    })
})