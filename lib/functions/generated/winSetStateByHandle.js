"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winSetStateByHandle(window, state, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinSetStateByHandle(window.toNumber(), state);
    return result !== 0;
}
exports.winSetStateByHandle = winSetStateByHandle;
