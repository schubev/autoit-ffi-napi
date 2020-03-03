import { Point } from './point'

export class Rectangle {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number

  private constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  static ofCorners(aX: number, aY: number, bX: number, bY: number): Rectangle {
    return new Rectangle(aX, aY, bX - aX, bY - aY)
  }

  centerPoint(): Point {
    return Point.ofCartesian(this.x + this.width / 2, this.y + this.height / 2)
  }
}
