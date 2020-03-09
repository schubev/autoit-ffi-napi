"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinActivateByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinActivateByHandle.async);
async function winActivateByHandle(window) {
    const result = await AU3_WinActivateByHandle(window.toNumber());
    return result !== 0;
}
exports.winActivateByHandle = winActivateByHandle;
