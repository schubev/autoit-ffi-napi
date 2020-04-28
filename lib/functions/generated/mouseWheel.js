"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function mouseWheel(direction, increments = 1, library) {
    const directionBuffer = wrap_utils_1.inWstrOfString(direction);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_MouseWheel(directionBuffer, increments);
}
exports.mouseWheel = mouseWheel;
