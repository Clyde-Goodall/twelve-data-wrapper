import builder from './util/URLHelper';
import * as e from './util/endpoints';
import {StockData, TimeSeries} from './types/typeClasses'

const ep = e.default

class TwelveDataWrapper {
    api_key: string
    api_config: Object
    header_config?: Object
    baseURL: string
    baseWSURL: string

    constructor(key?: string, options?: Object) {
        this.baseURL = 'https://api.twelvedata.com';
        this.baseWSURL = 'wss://ws.twelvedata.com';
        // if(key) this.header_config = {'Authorization': `apikey ${key}`};
        this.api_key = key ?? '';
        this.api_config = options ?? {};
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
    // fallback function to hit whatever URL a user wants and not use a specific function  . Will lack the appropriate type
    async getUnformattedEndpoint(endpoint: string): Promise<Body> {
        try {
            const res = await fetch(endpoint, this.header_config)
            return res.json();
        } catch(e) {
            return(e) as Promise<Body>
        }
    }

    async get<T>(query: T):Promise<Array<any> | string> {
        if(!this.api_key) {
            console.log('Please define an api key');
            return 'Please define an api key'
        }
        console.log()
        let matchingEndpoint = Object.keys(ep)
                // @ts-ignore

            .filter(k => k === query.type())[0] as string
        // console.log(Object.values(matchingEndpoint)[0])   
        if(!matchingEndpoint) {
            throw new Error(`Cannot locate this endpoint.`)
        }
        // @ts-ignore
        const URL = `${this.baseURL}${ep[matchingEndpoint as keyof typeof ep]}/${builder(query.body() as any, this.api_key)}`;
        console.log(`\x1b[1m[Endpoint URL: ${URL}]\x1b[0m`);
        const headerInit = {
            "Access-Control-Allow-Origin": "https://api.twelvedata.com",
            // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": `
            
                Access-Control-Allow-Headers
            `
        }
        const res = await fetch(URL, {
            method: 'GET',
            headers: headerInit,
        });
        // for whatever reason, fetch requires that you await the .json(), so this is how I'm managing that
        const output = await res.json() as Promise<Array<any>>;
        return output;
    }
}

export {
    TwelveDataWrapper,
    StockData,
    TimeSeries,
};