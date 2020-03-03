import { Point } from './point';
export declare class Rectangle {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    private constructor();
    static ofCorners(aX: number, aY: number, bX: number, bY: number): Rectangle;
    centerPoint(): Point;
}
