export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static ofCartesian(x, y) {
        return new Point(x, y);
    }
}
