"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winGetStateByHandle(window, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinGetStateByHandle(window.toNumber());
    return wrap_utils_1.decomposeBitSet(result);
}
exports.winGetStateByHandle = winGetStateByHandle;
