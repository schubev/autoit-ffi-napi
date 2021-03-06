"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winGetProcessByHandle(window, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    return lib.AU3_WinGetProcessByHandle(window.toNumber());
}
exports.winGetProcessByHandle = winGetProcessByHandle;
