"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinCloseByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinCloseByHandle.async);
async function winCloseByHandle(window) {
    const result = await AU3_WinCloseByHandle(window.toNumber());
    return result !== 0;
}
exports.winCloseByHandle = winCloseByHandle;
