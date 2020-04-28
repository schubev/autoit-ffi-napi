"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function mouseMove(x, y, speed = 10, library) {
    const lib = library !== null && library !== void 0 ? library : (await Promise.resolve().then(() => require('../../default-lib'))).lib;
    await lib.AU3_MouseMove(x, y, speed);
}
exports.mouseMove = mouseMove;
