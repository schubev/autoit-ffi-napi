"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinGetTitle = util_1.promisify(lowlevel_1.lib.AU3_WinGetTitle.async);
async function winGetTitle(windowDescription, windowText, titleSize = 512) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const outBuffer = wrap_utils_1.outWstrOfSize(titleSize);
    await AU3_WinGetTitle(windowDescriptionBuffer, windowTextBuffer, outBuffer, titleSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.winGetTitle = winGetTitle;
