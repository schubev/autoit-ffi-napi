"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlFocusByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlFocusByHandle.async);
async function controlFocusByHandle(window, control) {
    return AU3_ControlFocusByHandle(window.toNumber(), control.toNumber());
}
exports.controlFocusByHandle = controlFocusByHandle;
