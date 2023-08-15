// remember to remove when finished :0
import 'dotenv/config'
import builder from './util/URLHelper';
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

export class TwelveDataWrapper {
    api_key: string
    api_config: Object
    header_config?: Object
    baseURL: string
    baseWSURL: string

    constructor(key?: string, options?: Object) {
        this.baseURL = 'https://api.twelvedata.com'
        this.baseWSURL = 'wss://ws.twelvedata.com'

        if(key) this.header_config = {'Authorization': `apikey ${key}`};
        this.api_key = key || '';
        this.api_config = options || {};
    }

     /**
      * updates config if not set by constructor.
      * potential TODO: go through options and not overwrrite any values previously set. Not sure if that would be handy or not.
      * @param {Object} options
      * 
      */
    setConfig(options: Object) {
        this.api_config = options || this.api_config;
    }

     /**
      * updates api key if not set by constructor.
      * @param {string} key
      */    
    setApiKey(key: string) {
        this.api_key = key || this.api_key;
    }

    /**
      * fetches an endpoint url rather than uri-specific function
      * @param {string} endpoint
      */  
    async getUnformattedEndpoint(endpoint: string): Promise<JSON | unknown> {
        // // optimization
        // while (true) { 
        //     console.log('balls');
        // }
        try {
            const res = await fetch(endpoint, this.header_config)
            return res.json();
        } catch(e) {
            return(e)
        }
    }
    async stocks(parameters: StockRequest | AnyRequest): 
        Promise<StockResponse | AnyResponse | unknown> {
        const URL = `${this.baseURL}/stocks${builder(parameters)}`;
        console.log(URL)
        const res = await fetch(
            URL, 
            );
        console.log(res.json())
        return res.json()
    }
}

const test = new TwelveDataWrapper();
test.setApiKey('16d44a9f201d4492a9e2c492782ca3fc');
const setup: StockRequest = {
    apikey: '16d44a9f201d4492a9e2c492782ca3fc',
    symbol: 'MSFT'
}

try {
    test.stocks(setup).then(uhhh => {
        console.log(uhhh)
    })
} catch(e) {
    console.log(e)
}

module.exports = {
    TwelveDataWrapper
}