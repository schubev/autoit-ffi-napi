"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const wrap_utils_1 = require("../../wrap-utils");
const util_1 = require("util");
const AU3_ControlGetFocusByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlGetFocusByHandle.async);
async function controlGetFocusByHandle(window, controlSize = 512) {
    const outBuffer = wrap_utils_1.outWstrOfSize(controlSize);
    await AU3_ControlGetFocusByHandle(window.toNumber(), outBuffer, controlSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetFocusByHandle = controlGetFocusByHandle;
