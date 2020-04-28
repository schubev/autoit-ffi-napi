"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function controlDisableByHandle(window, control, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_ControlDisableByHandle(window.toNumber(), control.toNumber());
    return result !== 0;
}
exports.controlDisableByHandle = controlDisableByHandle;
