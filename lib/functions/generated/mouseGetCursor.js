"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_MouseGetCursor = util_1.promisify(lowlevel_1.lib.AU3_MouseGetCursor.async);
async function mouseGetCursor() {
    return AU3_MouseGetCursor();
}
exports.mouseGetCursor = mouseGetCursor;
