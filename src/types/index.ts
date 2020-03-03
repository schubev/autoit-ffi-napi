export { Hwnd } from './hwnd'

export enum MouseButton {
  Default = '',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Primary = 'primary',
  Main = 'main',
  Secondary = 'secondary',
  Menu = 'menu',
}

export enum SendMode {
  Default = 0,
  Raw = 1,
}

export enum Cursor {
  Unknown = -1,
  Hand = 0,
  AppStarting = 1,
  Arrow = 2,
  Cross = 3,
  Help = 4,
  IBeam = 5,
  Icon = 6,
  No = 7,
  Size = 8,
  SizeAll = 9,
  SizeNorthEastSouthWest = 10,
  SizeNorthSouth = 11,
  SizeNorthWestSouthEast = 12,
  SizeWestEath = 13,
  UpArrow = 14,
  Wait = 15,
}

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
}
