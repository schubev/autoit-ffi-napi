"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlClickByHandle(window, control, button, numClicks, nX = -2147483647, nY = -2147483647, library) {
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    return lib.AU3_ControlClickByHandle(window.toNumber(), control.toNumber(), buttonBuffer, numClicks, nX, nY);
}
exports.controlClickByHandle = controlClickByHandle;
