"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static ofCartesian(x, y) {
        return new Point(x, y);
    }
}
exports.Point = Point;
