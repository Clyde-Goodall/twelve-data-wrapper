declare module 'twelve-data-wrapper' {
    export class TwelveDataWrapper {
        constructor(key?: string, options?: Object);
        setConfig(options: Object): void;
        setApiKey(key: string): void;
        getUnformattedEndpoint(endpoint: string): Promise<JSON | unknown>;
        get(type: string, query: Object): Promise<Array<any>>;
        // stocks(parameters: StockRequest | AnyRequest): Promise<StockResponse | AnyResponse | unknown>
    }
    export function fuckYou(): void;
}