"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is generated by src/codegen/function-gen.ts.
const types_1 = require("../../types");
const wrap_utils_1 = require("../../wrap-utils");
async function mouseDown(button = types_1.MouseButton.Primary, library) {
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_MouseDown(buttonBuffer);
}
exports.mouseDown = mouseDown;
