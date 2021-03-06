"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is generated by src/codegen/function-gen.ts.
const types_1 = require("../../types");
const wrap_utils_1 = require("../../wrap-utils");
async function controlGetHandle(window, control, library) {
    const controlBuffer = wrap_utils_1.inWstrOfWindowDescription(control);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_ControlGetHandle(window.toNumber(), controlBuffer);
    return result === 0 ? null : types_1.Hwnd.ofNumber(result);
}
exports.controlGetHandle = controlGetHandle;
