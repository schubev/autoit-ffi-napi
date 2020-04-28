"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function controlMoveByHandle(window, control, nX, nY, nWidth = -1, nHeight = -1, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    return lib.AU3_ControlMoveByHandle(window.toNumber(), control.toNumber(), nX, nY, nWidth, nHeight);
}
exports.controlMoveByHandle = controlMoveByHandle;
