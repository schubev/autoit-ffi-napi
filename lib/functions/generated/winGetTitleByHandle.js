"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winGetTitleByHandle(window, titleSize = 512, library) {
    const outBuffer = wrap_utils_1.outWstrOfSize(titleSize);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    await lib.AU3_WinGetTitleByHandle(window.toNumber(), outBuffer, titleSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.winGetTitleByHandle = winGetTitleByHandle;
