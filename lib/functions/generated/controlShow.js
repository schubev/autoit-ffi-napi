"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlShow = util_1.promisify(lowlevel_1.lib.AU3_ControlShow.async);
async function controlShow(windowDescription, windowText, controlDescription) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    return AU3_ControlShow(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer);
}
exports.controlShow = controlShow;
