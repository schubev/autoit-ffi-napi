"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winCloseByHandle(window, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinCloseByHandle(window.toNumber());
    return result !== 0;
}
exports.winCloseByHandle = winCloseByHandle;
