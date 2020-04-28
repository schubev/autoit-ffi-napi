"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlSetTextByHandle(window, control, text, library) {
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_ControlSetTextByHandle(window.toNumber(), control.toNumber(), textBuffer);
    return result !== 0;
}
exports.controlSetTextByHandle = controlSetTextByHandle;
