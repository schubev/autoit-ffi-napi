"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winGetText(windowDescription, windowText, textSize = 512, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const outBuffer = wrap_utils_1.outWstrOfSize(textSize);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_WinGetText(windowDescriptionBuffer, windowTextBuffer, outBuffer, textSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.winGetText = winGetText;
