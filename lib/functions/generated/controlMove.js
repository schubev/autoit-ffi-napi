"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlMove(windowDescription, windowText, controlDescription, nX, nY, nWidth = -1, nHeight = -1, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    return lib.AU3_ControlMove(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, nX, nY, nWidth, nHeight);
}
exports.controlMove = controlMove;
