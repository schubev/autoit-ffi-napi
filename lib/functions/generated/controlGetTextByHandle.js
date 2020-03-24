"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlGetTextByHandle(window, control, controlTextSize = 512, library) {
    const outBuffer = wrap_utils_1.outWstrOfSize(controlTextSize);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    await lib.AU3_ControlGetTextByHandle(window.toNumber(), control.toNumber(), outBuffer, controlTextSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetTextByHandle = controlGetTextByHandle;
