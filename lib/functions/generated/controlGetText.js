"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function controlGetText(windowDescription, windowText, controlDescription, controlTextSize = 512, library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const controlDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(controlDescription);
    const outBuffer = wrap_utils_1.outWstrOfSize(controlTextSize);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_ControlGetText(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, outBuffer, controlTextSize);
    return wrap_utils_1.stringOfOutWstr(outBuffer);
}
exports.controlGetText = controlGetText;
