"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlGetFocusByHandle(window, controlSize = 512, library) {
    const outBuffer = wrap_utils_1.outWstrOfSize(controlSize);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    await lib.AU3_ControlGetFocusByHandle(window.toNumber(), outBuffer, controlSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetFocusByHandle = controlGetFocusByHandle;
