"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winGetClientSize(windowDescription, windowText, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinGetClientSize(windowDescriptionBuffer, windowTextBuffer, rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.winGetClientSize = winGetClientSize;
