"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlDisableByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlDisableByHandle.async);
async function controlDisableByHandle(window, control) {
    return AU3_ControlDisableByHandle(window.toNumber(), control.toNumber());
}
exports.controlDisableByHandle = controlDisableByHandle;
