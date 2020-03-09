"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const wrap_utils_1 = require("../../wrap-utils");
const util_1 = require("util");
const AU3_WinGetPosByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinGetPosByHandle.async);
async function winGetPosByHandle(window) {
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const result = await AU3_WinGetPosByHandle(window.toNumber(), rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.winGetPosByHandle = winGetPosByHandle;
