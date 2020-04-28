"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winMoveByHandle(window, x, y, width = -1, height = -1, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinMoveByHandle(window.toNumber(), x, y, width, height);
    return result !== 0;
}
exports.winMoveByHandle = winMoveByHandle;
