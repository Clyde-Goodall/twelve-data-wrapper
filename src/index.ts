import builder from './util/URLHelper.js';
import * as e from './util/endpoints.js';
import {StockData, TimeSeries} from './types/typeClasses.js'

const ep = e.default

class TwelveDataWrapper {
    api_key: string
    header_config?: Object
    baseURL: string
    baseWSURL: string

    constructor(key?: string, options?: {
        proxy?: string,
        wss_proxy?: string
    }) {
        this.baseURL = '';
        this.baseWSURL = 'wss://ws.twelvedata.com';
        // if(key) this.header_config = {'Authorization': `apikey ${key}`};
        this.api_key = key ?? '';
        // for CORS error prevention via proxy 
        if(!options) return
        if(Object.hasOwn(options, 'proxy')) {
            this.baseURL = options?.proxy as string;
            return
        }
        this.baseURL = 'https://api.twelvedata.com';

    }

     /**
      * updates api key if not set by constructor.
      * @param {string} key
      */    
    setApiKey(key: string) {
        this.api_key = key || this.api_key;
    }
    // fallback function to hit whatever URL a user wants and not use a specific function  . Will lack the appropriate type
    async getUnformattedEndpoint(endpoint: string): Promise<Body> {
        try {
            const res = await fetch(endpoint, this.header_config)
            return res.json();
        } catch(e) {
            return(e) as Promise<Body>
        }
    }

    async get<T>(query: T):Promise<any | string> {
        if(!this.api_key) {
            console.log('Please define an api key');
            return 'Please define an api key'
        }
        let matchingEndpoint = Object.keys(ep)
            // @ts-ignore
            .filter(k => k === query.type())[0] as string;
        if(!matchingEndpoint) {
            throw new Error(`Cannot locate this endpoint.`);
        }
        // @ts-ignore
        const URL = `${this.baseURL}${ep[matchingEndpoint as keyof typeof ep]}${builder(query.body() as any, this.api_key)}`;
        const res = await fetch(URL);
        // for whatever reason, fetch requires that you await the .json(), so this is how I'm managing that
        const output = await res.json();
        if(output.status !== "ok") throw new Error('Could not GET TwelveData resource');
        return {...output};
    }
}
// example:
//
// const new_api = new TwelveDataWrapper(
//     '41c2d05ca3404866813f89cabd600871',
//   )
//   const example = new TimeSeries({
//       interval: '30min',
//       symbol: 'AAPL'
//   })
//   // console.log(example)
//   new_api.get<TimeSeries>(example).then(out => {
//     console.log(out)
//   })

export {
    TwelveDataWrapper,
    StockData,
    TimeSeries,
};