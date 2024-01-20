export default function URLBuilder(config: any, key: string):string {
    let URL = '?';
    for(const prop in config) {
        URL += `${prop}=${config[prop]}&`;
    }
    URL += `apikey=${key}`
    return URL;
}