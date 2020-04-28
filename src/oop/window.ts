import { WindowDescription } from 'autoit-advanced-descriptor'
import { Control } from './control'
import {
  controlGetHandle,
  winActivateByHandle,
  winActiveByHandle,
  winCloseByHandle,
  winExistsByHandle,
  winGetHandle,
  winGetStateByHandle,
  winMinimizeAll,
  winMinimizeAllUndo,
  winWaitActiveByHandle,
  winWaitCloseByHandle,
  winGetTextByHandle,
  winGetTitleByHandle,
  winKillByHandle,
  winMenuSelectItemByHandle,
} from '../functions'
import { Hwnd, WindowState } from '../types'

function tick(millisecs: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, millisecs)
  })
}

export class Window {
  private hwnd: Hwnd

  private constructor(hwnd: Hwnd) {
    this.hwnd = hwnd
  }

  static ofHwnd(hwnd: Hwnd): Window {
    return new Window(hwnd)
  }

  static async ofSelector(
    windowDescription: WindowDescription,
    windowText = '',
  ): Promise<Window | null> {
    const hwnd = await winGetHandle(windowDescription, windowText)
    if (hwnd === null) return null
    return new Window(hwnd)
  }

  static async wait(
    windowDescription: WindowDescription,
    windowText?: string,
    timeoutMillisecs = Infinity,
  ): Promise<Window | null> {
    const incrementMillisecs = 250
    for (let i = 0; i < timeoutMillisecs; i += incrementMillisecs) {
      if (i > 0) await tick(incrementMillisecs)
      const window = Window.ofSelector(windowDescription, windowText)
      if (window !== null) return window
    }
    return null
  }

  getHwnd(): Hwnd {
    return this.hwnd
  }

  static async minimizeAll(): Promise<void> {
    return winMinimizeAll()
  }

  static async minimizeAllUndo(): Promise<void> {
    return winMinimizeAllUndo()
  }

  async getControl(
    controlDescription: WindowDescription,
  ): Promise<Control | null> {
    const controlHwnd = await controlGetHandle(this.hwnd, controlDescription)
    if (controlHwnd === null) return null
    return Control.ofParentAndHwnd(this, controlHwnd)
  }

  async activate(): Promise<boolean> {
    return winActivateByHandle(this.hwnd)
  }

  async active(): Promise<boolean> {
    return winActiveByHandle(this.hwnd)
  }

  async close(): Promise<boolean> {
    return winCloseByHandle(this.hwnd)
  }

  async exists(): Promise<boolean> {
    return winExistsByHandle(this.hwnd)
  }

  async getState(): Promise<Set<WindowState>> {
    return winGetStateByHandle(this.hwnd)
  }

  async getText(): Promise<string> {
    return winGetTextByHandle(this.hwnd)
  }

  async getTitle(): Promise<string> {
    return winGetTitleByHandle(this.hwnd)
  }

  async kill(): Promise<boolean> {
    return winKillByHandle(this.hwnd)
  }

  async selectMenuItem(
    item0: string,
    item1?: string,
    item2?: string,
    item3?: string,
    item4?: string,
    item5?: string,
    item6?: string,
    item7?: string,
  ): Promise<boolean> {
    return winMenuSelectItemByHandle(
      this.hwnd,
      item0,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
    )
  }

  async waitActive(timeoutSecs = Infinity): Promise<boolean> {
    if (timeoutSecs === Infinity) timeoutSecs = 0
    return winWaitActiveByHandle(this.hwnd, timeoutSecs)
  }

  async waitClose(timeoutSecs = Infinity): Promise<boolean> {
    if (timeoutSecs === Infinity) timeoutSecs = 0
    return winWaitCloseByHandle(this.hwnd, timeoutSecs)
  }
}
