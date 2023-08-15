declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TWELVE_DATA_KEY?: string;
            NODE_ENV: 'dev' | 'test' | 'prod';
        }
    }    
}

export {}
