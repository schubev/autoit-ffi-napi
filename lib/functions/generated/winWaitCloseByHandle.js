"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinWaitCloseByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinWaitCloseByHandle.async);
async function winWaitCloseByHandle(window, timeoutSeconds = 0) {
    const result = await AU3_WinWaitCloseByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
exports.winWaitCloseByHandle = winWaitCloseByHandle;
