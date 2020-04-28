"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlGetPos(windowDescription, windowText, controlDescription, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const rectangleBuffer = await wrap_utils_1.outRectangleBuffer();
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_ControlGetPos(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, rectangleBuffer);
    return result ? await wrap_utils_1.rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
exports.controlGetPos = controlGetPos;
