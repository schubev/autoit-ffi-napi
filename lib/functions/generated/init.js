"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function init(library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_Init();
}
exports.init = init;
