export { Hwnd } from './hwnd'
export { Point } from './point'
export { Rectangle } from './rectangle'

export enum MouseButton {
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Primary = 'primary',
  Main = 'main',
  Secondary = 'secondary',
  Menu = 'menu',
}

export enum MouseScrollDirection {
  Up = 'up',
  Down = 'down',
}

export enum SetWindowState {
  Hide = 0,
  Show = 5,
  Maximize = 3,
  Minimize = 6,
  Restore = 9,
}

export enum WindowState {
  Exists = 1,
  Visible = 2,
  Enabled = 4,
  Active = 8,
  Minimized = 16,
  Maximized = 32,
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
