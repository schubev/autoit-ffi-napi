"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinExists = util_1.promisify(lowlevel_1.lib.AU3_WinExists.async);
async function winExists(windowDescription, windowText) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const result = await AU3_WinExists(windowDescriptionBuffer, windowTextBuffer);
    return result !== 0;
}
exports.winExists = winExists;
