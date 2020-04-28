"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function winMinimizeAllUndo(library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_WinMinimizeAllUndo();
}
exports.winMinimizeAllUndo = winMinimizeAllUndo;
