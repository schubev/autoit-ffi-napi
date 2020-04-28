"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlGetPosByHandle(window, control, library) {
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_ControlGetPosByHandle(window.toNumber(), control.toNumber(), rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.controlGetPosByHandle = controlGetPosByHandle;
