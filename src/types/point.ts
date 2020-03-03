export class Point {
  readonly x: number
  readonly y: number

  private constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  static ofCartesian(x: number, y: number): Point {
    return new Point(x, y)
  }
}
