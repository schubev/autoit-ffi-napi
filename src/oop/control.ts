import { Hwnd, MouseButton, SendMode, Rectangle } from '../types'
import { Window } from './window'
import {
  controlClickByHandle,
  controlDisableByHandle,
  controlEnableByHandle,
  controlFocusByHandle,
  controlGetPosByHandle,
  controlGetTextByHandle,
  controlSendByHandle,
  controlSetTextByHandle,
} from '../functions'

export class Control {
  private window: Window
  private hwnd: Hwnd

  private constructor(window: Window, hwnd: Hwnd) {
    this.window = window
    this.hwnd = hwnd
  }

  static ofParentAndHwnd(window: Window, hwnd: Hwnd): Control {
    return new Control(window, hwnd)
  }

  async setText(text: string): Promise<boolean> {
    return controlSetTextByHandle(this.window.getHwnd(), this.hwnd, text)
  }

  async getText(textSize?: number): Promise<string> {
    return controlGetTextByHandle(this.window.getHwnd(), this.hwnd, textSize)
  }

  async focus(): Promise<boolean> {
    return controlFocusByHandle(this.window.getHwnd(), this.hwnd)
  }

  async click(
    button = MouseButton.Primary,
    count = 1,
    position?: { readonly x: number; readonly y: number },
  ): Promise<boolean> {
    const { x, y } = position ? position : ({} as const)
    return controlClickByHandle(
      this.window.getHwnd(),
      this.hwnd,
      button,
      count,
      x,
      y,
    )
  }

  async getPos(): Promise<Rectangle | null> {
    return controlGetPosByHandle(this.window.getHwnd(), this.hwnd)
  }

  async enable(): Promise<boolean> {
    return controlEnableByHandle(this.window.getHwnd(), this.hwnd)
  }

  async disable(): Promise<boolean> {
    return controlDisableByHandle(this.window.getHwnd(), this.hwnd)
  }

  async send(text: string, mode?: SendMode): Promise<boolean> {
    return controlSendByHandle(this.window.getHwnd(), this.hwnd, text, mode)
  }
}
