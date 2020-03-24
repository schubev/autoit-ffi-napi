"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winWaitNotActiveByHandle(window, timeoutSeconds = 0, library) {
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    const result = await lib.AU3_WinWaitNotActiveByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
exports.winWaitNotActiveByHandle = winWaitNotActiveByHandle;
