export default function URLBuilder(config: any):string {
    let URL = '?';
    for(const prop in config) {
        URL += `${prop}=${config[prop]}&`;
    }
    return URL;
}