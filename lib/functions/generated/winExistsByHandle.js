"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_WinExistsByHandle = util_1.promisify(lowlevel_1.lib.AU3_WinExistsByHandle.async);
async function winExistsByHandle(window) {
    const result = await AU3_WinExistsByHandle(window.toNumber());
    return result !== 0;
}
exports.winExistsByHandle = winExistsByHandle;
