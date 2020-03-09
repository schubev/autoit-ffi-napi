"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlEnableByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlEnableByHandle.async);
async function controlEnableByHandle(window, control) {
    return AU3_ControlEnableByHandle(window.toNumber(), control.toNumber());
}
exports.controlEnableByHandle = controlEnableByHandle;
