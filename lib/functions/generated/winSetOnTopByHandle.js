"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winSetOnTopByHandle(window, onTop = true, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinSetOnTopByHandle(window.toNumber(), Number(onTop));
    return result !== 0;
}
exports.winSetOnTopByHandle = winSetOnTopByHandle;
