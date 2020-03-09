"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const wrap_utils_1 = require("../../wrap-utils");
const util_1 = require("util");
const AU3_WinGetTitleByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinGetTitleByHandle.async);
async function winGetTitleByHandle(window, titleSize = 512) {
    const outBuffer = wrap_utils_1.outWstrOfSize(titleSize);
    await AU3_WinGetTitleByHandle(window.toNumber(), outBuffer, titleSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.winGetTitleByHandle = winGetTitleByHandle;
