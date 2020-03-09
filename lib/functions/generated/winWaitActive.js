"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinWaitActive = util_1.promisify(lowlevel_1.lib.AU3_WinWaitActive.async);
async function winWaitActive(windowDescription, windowText, timeoutSeconds = 0) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const result = await AU3_WinWaitActive(windowDescriptionBuffer, windowTextBuffer, timeoutSeconds);
    return result !== 0;
}
exports.winWaitActive = winWaitActive;
