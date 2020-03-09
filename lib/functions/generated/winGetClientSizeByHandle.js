"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const wrap_utils_1 = require("../../wrap-utils");
const util_1 = require("util");
const AU3_WinGetClientSizeByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinGetClientSizeByHandle.async);
async function winGetClientSizeByHandle(window) {
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const result = await AU3_WinGetClientSizeByHandle(window.toNumber(), rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.winGetClientSizeByHandle = winGetClientSizeByHandle;
