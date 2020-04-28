"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function mouseGetPos(library) {
    const pointBuffer = await wrap_utils_1.outPointBuffer();
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_MouseGetPos(pointBuffer);
    return wrap_utils_1.pointOfPointBuffer(pointBuffer);
}
exports.mouseGetPos = mouseGetPos;
