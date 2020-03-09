"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinActiveByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinActiveByHandle.async);
async function winActiveByHandle(window) {
    const result = await AU3_WinActiveByHandle(window.toNumber());
    return result !== 0;
}
exports.winActiveByHandle = winActiveByHandle;
