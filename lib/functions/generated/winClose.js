"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinClose = util_1.promisify(lowlevel_1.lib.AU3_WinClose.async);
async function winClose(windowDescription, windowText) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const result = await AU3_WinClose(windowDescriptionBuffer, windowTextBuffer);
    return result !== 0;
}
exports.winClose = winClose;
