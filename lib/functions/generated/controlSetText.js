"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlSetText(windowDescription, windowText, controlDescription, text, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_ControlSetText(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer);
    return result !== 0;
}
exports.controlSetText = controlSetText;
