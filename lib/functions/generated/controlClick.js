"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlClick = util_1.promisify(lowlevel_1.lib.AU3_ControlClick.async);
async function controlClick(windowDescription, windowText, controlDescription, button, numClicks, nX = -2147483647, nY = -2147483647) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    const result = await AU3_ControlClick(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, buttonBuffer, numClicks, nX, nY);
    return result !== 0;
}
exports.controlClick = controlClick;
