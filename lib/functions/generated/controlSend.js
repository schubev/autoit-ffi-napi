"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const wrap_utils_1 = require("../../wrap-utils");
async function controlSend(windowDescription, windowText, controlDescription, text, mode = types_1.SendMode.Default, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    return lib.AU3_ControlSend(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer, mode);
}
exports.controlSend = controlSend;
