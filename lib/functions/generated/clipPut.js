"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function clipPut(clip, library) {
    const clipBuffer = wrap_utils_1.inWstrOfString(clip);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_ClipPut(clipBuffer);
}
exports.clipPut = clipPut;
