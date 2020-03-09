"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_MouseClickDrag = util_1.promisify(lowlevel_1.lib.AU3_MouseClickDrag.async);
async function mouseClickDrag(button, xStart, yStart, xEnd, yEnd, speed = 10) {
    const buttonBuffer = wrap_utils_1.inWstrOfString(button);
    const result = await AU3_MouseClickDrag(buttonBuffer, xStart, yStart, xEnd, yEnd, speed);
    return result !== 0;
}
exports.mouseClickDrag = mouseClickDrag;
