"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlClick(windowDescription, windowText, controlDescription, button, numClicks, nX = -2147483647, nY = -2147483647, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    const result = await lib.AU3_ControlClick(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, buttonBuffer, numClicks, nX, nY);
    return result !== 0;
}
exports.controlClick = controlClick;
