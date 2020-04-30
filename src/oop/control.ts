import { Hwnd, MouseButton, SendMode, Rectangle } from '../types'
import { LibraryParam } from '../util/library-param'
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

  async setText(
    text: string,
    library?: LibraryParam<typeof controlSetTextByHandle>,
  ): Promise<boolean> {
    return controlSetTextByHandle(
      this.window.getHwnd(),
      this.hwnd,
      text,
      library,
    )
  }

  async getText(
    textSize?: number,
    library?: LibraryParam<typeof controlGetTextByHandle>,
  ): Promise<string> {
    return controlGetTextByHandle(
      this.window.getHwnd(),
      this.hwnd,
      textSize,
      library,
    )
  }

  async focus(
    library?: LibraryParam<typeof controlFocusByHandle>,
  ): Promise<boolean> {
    return controlFocusByHandle(this.window.getHwnd(), this.hwnd, library)
  }

  async click(
    button = MouseButton.Primary,
    count = 1,
    position?: { readonly x: number; readonly y: number },
    library?: LibraryParam<typeof controlClickByHandle>,
  ): Promise<boolean> {
    const { x, y } = position ? position : ({} as const)
    return controlClickByHandle(
      this.window.getHwnd(),
      this.hwnd,
      button,
      count,
      x,
      y,
      library,
    )
  }

  async getPos(
    library?: LibraryParam<typeof controlGetPosByHandle>,
  ): Promise<Rectangle | null> {
    return controlGetPosByHandle(this.window.getHwnd(), this.hwnd, library)
  }

  async enable(
    library?: LibraryParam<typeof controlEnableByHandle>,
  ): Promise<boolean> {
    return controlEnableByHandle(this.window.getHwnd(), this.hwnd, library)
  }

  async disable(
    library?: LibraryParam<typeof controlDisableByHandle>,
  ): Promise<boolean> {
    return controlDisableByHandle(this.window.getHwnd(), this.hwnd, library)
  }

  async send(
    text: string,
    mode?: SendMode,
    library?: LibraryParam<typeof controlSendByHandle>,
  ): Promise<boolean> {
    return controlSendByHandle(
      this.window.getHwnd(),
      this.hwnd,
      text,
      mode,
      library,
    )
  }
}
