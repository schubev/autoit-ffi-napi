"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinGetPos = util_1.promisify(lowlevel_1.lib.AU3_WinGetPos.async);
async function winGetPos(windowDescription, windowText) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const rectangleBuffer = wrap_utils_1.outRectangleBuffer();
    const result = await AU3_WinGetPos(windowDescriptionBuffer, windowTextBuffer, rectangleBuffer);
    return result ? wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.winGetPos = winGetPos;
