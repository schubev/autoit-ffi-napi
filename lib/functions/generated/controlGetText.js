"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlGetText = util_1.promisify(lowlevel_1.lib.AU3_ControlGetText.async);
async function controlGetText(windowDescription, windowText, controlDescription, controlTextSize = 512) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const outBuffer = wrap_utils_1.outWstrOfSize(controlTextSize);
    await AU3_ControlGetText(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, outBuffer, controlTextSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetText = controlGetText;
