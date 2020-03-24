"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winActivateByHandle(window, library) {
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    const result = await lib.AU3_WinActivateByHandle(window.toNumber());
    return result !== 0;
}
exports.winActivateByHandle = winActivateByHandle;
