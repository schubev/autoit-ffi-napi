"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinGetClientSize = util_1.promisify(lowlevel_1.lib.AU3_WinGetClientSize.async);
async function winGetClientSize(windowDescription, windowText) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const result = await AU3_WinGetClientSize(windowDescriptionBuffer, windowTextBuffer, rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.winGetClientSize = winGetClientSize;
