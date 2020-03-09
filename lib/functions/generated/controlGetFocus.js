"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlGetFocus = util_1.promisify(lowlevel_1.lib.AU3_ControlGetFocus.async);
async function controlGetFocus(windowDescription, windowText, controlSize = 512) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const outBuffer = wrap_utils_1.outWstrOfSize(controlSize);
    await AU3_ControlGetFocus(windowDescriptionBuffer, windowTextBuffer, outBuffer, controlSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetFocus = controlGetFocus;
