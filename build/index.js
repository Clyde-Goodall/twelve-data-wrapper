"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwelveDataWrapper = void 0;
// remember to remove when finished :0
require("dotenv/config");
const URLHelper_1 = __importDefault(require("./util/URLHelper"));
/**
 * TwelveData endpoints:
 * /stocks
 * /forex_pairs
 * /cryptocurrenices
 * /etf
 * /indices
 * /exchanges
 * /cryptocurrency_exchanges
 * /technical_indicators
 * /symbol_search
 * /earliest_timestamp
 * /market_state
 * /time_series
 */
class TwelveDataWrapper {
    api_key;
    api_config;
    header_config;
    baseURL;
    baseWSURL;
    constructor(key, options) {
        this.baseURL = 'https://api.twelvedata.com';
        this.baseWSURL = 'wss://ws.twelvedata.com';
        if (key)
            this.header_config = { 'Authorization': `apikey ${key}` };
        this.api_key = key || '';
        this.api_config = options || {};
    }
    /**
     * updates config if not set by constructor.
     * potential TODO: go through options and not overwrrite any values previously set. Not sure if that would be handy or not.
     * @param {Object} options
     *
     */
    setConfig(options) {
        this.api_config = options || this.api_config;
    }
    /**
     * updates api key if not set by constructor.
     * @param {string} key
     */
    setApiKey(key) {
        this.api_key = key || this.api_key;
    }
    /**
      * fetches an endpoint url rather than uri-specific function
      * @param {string} endpoint
      */
    async getUnformattedEndpoint(endpoint) {
        // // optimization
        // while (true) { 
        //     console.log('balls');
        // }
        try {
            const res = await fetch(endpoint, this.header_config);
            return res.json();
        }
        catch (e) {
            return (e);
        }
    }
    async stocks(parameters) {
        const URL = `${this.baseURL}/stocks${(0, URLHelper_1.default)(parameters)}`;
        console.log(URL);
        const res = await fetch(URL);
        console.log(res.json());
        return res.json();
    }
}
exports.TwelveDataWrapper = TwelveDataWrapper;
const test = new TwelveDataWrapper();
test.setApiKey('16d44a9f201d4492a9e2c492782ca3fc');
const setup = {
    apikey: '16d44a9f201d4492a9e2c492782ca3fc',
    symbol: 'MSFT'
};
try {
    test.stocks(setup).then(uhhh => {
        console.log(uhhh);
    });
}
catch (e) {
    console.log(e);
}
module.exports = {
    TwelveDataWrapper
};
