"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
async function winMenuSelectItem(windowDescription, windowText, item0 = '', item1 = '', item2 = '', item3 = '', item4 = '', item5 = '', item6 = '', item7 = '', library) {
    const windowDescriptionBuffer = wrap_utils_1.inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = wrap_utils_1.inWstrOfString(windowText);
    const item0Buffer = wrap_utils_1.inWstrOfString(item0);
    const item1Buffer = wrap_utils_1.inWstrOfString(item1);
    const item2Buffer = wrap_utils_1.inWstrOfString(item2);
    const item3Buffer = wrap_utils_1.inWstrOfString(item3);
    const item4Buffer = wrap_utils_1.inWstrOfString(item4);
    const item5Buffer = wrap_utils_1.inWstrOfString(item5);
    const item6Buffer = wrap_utils_1.inWstrOfString(item6);
    const item7Buffer = wrap_utils_1.inWstrOfString(item7);
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    const result = await lib.AU3_WinMenuSelectItem(windowDescriptionBuffer, windowTextBuffer, item0Buffer, item1Buffer, item2Buffer, item3Buffer, item4Buffer, item5Buffer, item6Buffer, item7Buffer);
    return result !== 0;
}
exports.winMenuSelectItem = winMenuSelectItem;
