import { WindowDescription } from 'autoit-advanced-descriptor'
import { Hwnd } from './types'
import { winGetHandle } from './functions'

class Window {
  private hwnd: Hwnd

  private constructor(hwnd: Hwnd) {
    this.hwnd = hwnd
  }

  static async get(window: WindowDescription): Promise<Window | null> {
    const hwnd = await winGetHandle(window, '')
    return hwnd != null ? new Window(hwnd) : null
  }
}
