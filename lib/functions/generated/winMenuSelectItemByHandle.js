"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinMenuSelectItemByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinMenuSelectItemByHandle.async);
async function winMenuSelectItemByHandle(window, item0 = '', item1 = '', item2 = '', item3 = '', item4 = '', item5 = '', item6 = '', item7 = '') {
    const item0Buffer = wrap_utils_1.inWstrOfString(item0);
    const item1Buffer = wrap_utils_1.inWstrOfString(item1);
    const item2Buffer = wrap_utils_1.inWstrOfString(item2);
    const item3Buffer = wrap_utils_1.inWstrOfString(item3);
    const item4Buffer = wrap_utils_1.inWstrOfString(item4);
    const item5Buffer = wrap_utils_1.inWstrOfString(item5);
    const item6Buffer = wrap_utils_1.inWstrOfString(item6);
    const item7Buffer = wrap_utils_1.inWstrOfString(item7);
    return AU3_WinMenuSelectItemByHandle(window.toNumber(), item0Buffer, item1Buffer, item2Buffer, item3Buffer, item4Buffer, item5Buffer, item6Buffer, item7Buffer);
}
exports.winMenuSelectItemByHandle = winMenuSelectItemByHandle;
