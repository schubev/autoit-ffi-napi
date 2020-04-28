"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winSetOnTop(windowDescription, windowText, onTop = true, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinSetOnTop(windowDescriptionBuffer, windowTextBuffer, Number(onTop));
    return result !== 0;
}
exports.winSetOnTop = winSetOnTop;
