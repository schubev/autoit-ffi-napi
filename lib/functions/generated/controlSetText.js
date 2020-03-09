"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlSetText = util_1.promisify(lowlevel_1.lib.AU3_ControlSetText.async);
async function controlSetText(windowDescription, windowText, controlDescription, text) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    return AU3_ControlSetText(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer);
}
exports.controlSetText = controlSetText;
