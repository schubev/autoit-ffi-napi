"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winSetTransByHandle(window, transparency, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinSetTransByHandle(window.toNumber(), transparency);
    return result !== 0;
}
exports.winSetTransByHandle = winSetTransByHandle;
