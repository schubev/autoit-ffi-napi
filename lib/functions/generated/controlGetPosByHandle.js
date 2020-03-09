"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const wrap_utils_1 = require("../../wrap-utils");
const util_1 = require("util");
const AU3_ControlGetPosByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlGetPosByHandle.async);
async function controlGetPosByHandle(window, control) {
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const result = await AU3_ControlGetPosByHandle(window.toNumber(), control.toNumber(), rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.controlGetPosByHandle = controlGetPosByHandle;
