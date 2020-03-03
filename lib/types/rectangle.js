import { Point } from './point';
export class Rectangle {
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
        return Point.ofCartesian(this.x + this.width / 2, this.y + this.height / 2);
    }
}
