"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function mouseGetCursor(library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    return lib.AU3_MouseGetCursor();
}
exports.mouseGetCursor = mouseGetCursor;
