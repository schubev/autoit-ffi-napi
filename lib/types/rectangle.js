"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    static ofCorners(aX, aY, bX, bY) {
        return new Rectangle(aX, aY, bX - aX, bY - aY);
    }
    centerPoint() {
        return point_1.Point.ofCartesian(this.x + this.width / 2, this.y + this.height / 2);
    }
}
exports.Rectangle = Rectangle;
