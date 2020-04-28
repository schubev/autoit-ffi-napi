"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const wrap_utils_1 = require("../../wrap-utils");
async function send(text, mode = types_1.SendMode.Default, library) {
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_Send(textBuffer, mode);
}
exports.send = send;
