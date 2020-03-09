"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlHideByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlHideByHandle.async);
async function controlHideByHandle(window, control) {
    return AU3_ControlHideByHandle(window.toNumber(), control.toNumber());
}
exports.controlHideByHandle = controlHideByHandle;
