"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winSetTitleByHandle(window, title, library) {
    const titleBuffer = wrap_utils_1.inWstrOfString(title);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinSetTitleByHandle(window.toNumber(), titleBuffer);
    return result !== 0;
}
exports.winSetTitleByHandle = winSetTitleByHandle;
