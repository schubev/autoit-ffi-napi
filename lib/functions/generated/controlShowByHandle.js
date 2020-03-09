"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlShowByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlShowByHandle.async);
async function controlShowByHandle(window, control) {
    return AU3_ControlShowByHandle(window.toNumber(), control.toNumber());
}
exports.controlShowByHandle = controlShowByHandle;
