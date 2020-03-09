"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlHide = util_1.promisify(lowlevel_1.lib.AU3_ControlHide.async);
async function controlHide(windowDescription, windowText, controlDescription) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    return AU3_ControlHide(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer);
}
exports.controlHide = controlHide;
