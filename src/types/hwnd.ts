export class Hwnd {
  private hwnd: number

  private constructor(hwnd: number) {
    this.hwnd = hwnd
  }

  static ofNumber(hwnd: number): Hwnd {
    return new Hwnd(hwnd)
  }

  toNumber(): number {
    return this.hwnd
  }
}
