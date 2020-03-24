"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function clipGet(clipSize = 512, library) {
    const outBuffer = wrap_utils_1.outWstrOfSize(clipSize);
    const lib = (library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib);
    await lib.AU3_ClipGet(outBuffer, clipSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.clipGet = clipGet;
