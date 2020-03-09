"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlSetTextByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlSetTextByHandle.async);
async function controlSetTextByHandle(window, control, text) {
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    return AU3_ControlSetTextByHandle(window.toNumber(), control.toNumber(), textBuffer);
}
exports.controlSetTextByHandle = controlSetTextByHandle;
