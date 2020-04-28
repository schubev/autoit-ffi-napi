"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winWaitByHandle(window, timeoutSeconds = 0, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinWaitByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
exports.winWaitByHandle = winWaitByHandle;
