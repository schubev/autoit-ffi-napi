"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winGetClientSizeByHandle(window, library) {
    const rectangleBuffer = await wrap_utils_1.outRectangleBuffer();
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinGetClientSizeByHandle(window.toNumber(), rectangleBuffer);
    return result ? await wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.winGetClientSizeByHandle = winGetClientSizeByHandle;
