"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winWaitActiveByHandle(window, timeoutSeconds = 0, library) {
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    const result = await lib.AU3_WinWaitActiveByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
exports.winWaitActiveByHandle = winWaitActiveByHandle;
