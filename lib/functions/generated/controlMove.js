"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlMove = util_1.promisify(lowlevel_1.lib.AU3_ControlMove.async);
async function controlMove(windowDescription, windowText, controlDescription, nX, nY, nWidth = -1, nHeight = -1) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    return AU3_ControlMove(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, nX, nY, nWidth, nHeight);
}
exports.controlMove = controlMove;
