"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_ControlMoveByHandle = util_1.promisify(lowlevel_1.lib.AU3_ControlMoveByHandle.async);
async function controlMoveByHandle(window, control, nX, nY, nWidth = -1, nHeight = -1) {
    return AU3_ControlMoveByHandle(window.toNumber(), control.toNumber(), nX, nY, nWidth, nHeight);
}
exports.controlMoveByHandle = controlMoveByHandle;
