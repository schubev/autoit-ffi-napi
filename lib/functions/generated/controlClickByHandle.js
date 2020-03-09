"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlClickByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlClickByHandle.async);
async function controlClickByHandle(window, control, button, numClicks, nX = -2147483647, nY = -2147483647) {
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    return AU3_ControlClickByHandle(window.toNumber(), control.toNumber(), buttonBuffer, numClicks, nX, nY);
}
exports.controlClickByHandle = controlClickByHandle;
