"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const wrap_utils_1 = require("../../wrap-utils");
const util_1 = require("util");
const AU3_ControlGetTextByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlGetTextByHandle.async);
async function controlGetTextByHandle(window, control, controlTextSize = 512) {
    const outBuffer = wrap_utils_1.outWstrOfSize(controlTextSize);
    await AU3_ControlGetTextByHandle(window.toNumber(), control.toNumber(), outBuffer, controlTextSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetTextByHandle = controlGetTextByHandle;
