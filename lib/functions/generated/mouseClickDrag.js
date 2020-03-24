"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function mouseClickDrag(button, xStart, yStart, xEnd, yEnd, speed = 10, library) {
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    const result = await lib.AU3_MouseClickDrag(buttonBuffer, xStart, yStart, xEnd, yEnd, speed);
    return result !== 0;
}
exports.mouseClickDrag = mouseClickDrag;
