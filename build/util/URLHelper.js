"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function URLBuilder(config) {
    let URL = '?';
    for (const prop in config) {
        URL += `${prop}=${config[prop]}&`;
    }
    return URL;
}
exports.default = URLBuilder;
