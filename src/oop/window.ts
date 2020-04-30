import { WindowDescription } from 'autoit-advanced-descriptor'
import { Control } from './control'
import { LibraryParam } from '../util/library-param'
import {
  controlGetHandle,
  winActivateByHandle,
  winActiveByHandle,
  winCloseByHandle,
  winExistsByHandle,
  winGetClientSizeByHandle,
  winGetHandle,
  winGetPosByHandle,
  winGetProcessByHandle,
  winGetStateByHandle,
  winGetTextByHandle,
  winGetTitleByHandle,
  winKillByHandle,
  winMenuSelectItemByHandle,
  winMinimizeAll,
  winMinimizeAllUndo,
  winMoveByHandle,
  winSetOnTopByHandle,
  winSetStateByHandle,
  winSetTitleByHandle,
  winSetTransByHandle,
  winWaitActiveByHandle,
  winWaitCloseByHandle,
  winWaitNotActiveByHandle,
} from '../functions'
import { Hwnd, WindowState, Rectangle, Point, SetWindowState } from '../types'

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

  static async minimizeAll(
    library?: LibraryParam<typeof winMinimizeAll>,
  ): Promise<void> {
    return winMinimizeAll(library)
  }

  static async minimizeAllUndo(
    library?: LibraryParam<typeof winMinimizeAllUndo>,
  ): Promise<void> {
    return winMinimizeAllUndo(library)
  }

  async getControl(
    controlDescription: WindowDescription,
    library?: LibraryParam<typeof controlGetHandle>,
  ): Promise<Control | null> {
    const controlHwnd = await controlGetHandle(
      this.hwnd,
      controlDescription,
      library,
    )
    if (controlHwnd === null) return null
    return Control.ofParentAndHwnd(this, controlHwnd)
  }

  async activate(
    library?: LibraryParam<typeof winActivateByHandle>,
  ): Promise<boolean> {
    return winActivateByHandle(this.hwnd, library)
  }

  async active(
    library?: LibraryParam<typeof winActiveByHandle>,
  ): Promise<boolean> {
    return winActiveByHandle(this.hwnd, library)
  }

  async close(
    library?: LibraryParam<typeof winCloseByHandle>,
  ): Promise<boolean> {
    return winCloseByHandle(this.hwnd, library)
  }

  async exists(
    library?: LibraryParam<typeof winExistsByHandle>,
  ): Promise<boolean> {
    return winExistsByHandle(this.hwnd, library)
  }

  async getClientSize(
    library?: LibraryParam<typeof winGetClientSizeByHandle>,
  ): Promise<Rectangle | null> {
    return winGetClientSizeByHandle(this.hwnd, library)
  }

  async getPos(
    library?: LibraryParam<typeof winGetPosByHandle>,
  ): Promise<Rectangle | null> {
    return winGetPosByHandle(this.hwnd, library)
  }

  async getProcess(
    library?: LibraryParam<typeof winGetProcessByHandle>,
  ): Promise<number> {
    return winGetProcessByHandle(this.hwnd, library)
  }

  async getState(
    library?: LibraryParam<typeof winGetStateByHandle>,
  ): Promise<Set<WindowState>> {
    return winGetStateByHandle(this.hwnd, library)
  }

  async getText(
    textSize?: number,
    library?: LibraryParam<typeof winGetTextByHandle>,
  ): Promise<string> {
    return winGetTextByHandle(this.hwnd, textSize, library)
  }

  async getTitle(
    titleSize?: number,
    library?: LibraryParam<typeof winGetTitleByHandle>,
  ): Promise<string> {
    return winGetTitleByHandle(this.hwnd, titleSize, library)
  }

  async kill(library?: LibraryParam<typeof winKillByHandle>): Promise<boolean> {
    return winKillByHandle(this.hwnd, library)
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
    library?: LibraryParam<typeof winMenuSelectItemByHandle>,
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
      library,
    )
  }

  async move(
    rectangle: Readonly<Point | Rectangle>,
    library?: LibraryParam<typeof winMoveByHandle>,
  ): Promise<boolean> {
    return winMoveByHandle(
      this.hwnd,
      rectangle.x,
      rectangle.y,
      'width' in rectangle ? rectangle.width : undefined,
      'height' in rectangle ? rectangle.height : undefined,
      library,
    )
  }

  async setOnTop(
    onTop: boolean,
    library?: LibraryParam<typeof winSetOnTopByHandle>,
  ): Promise<boolean> {
    return winSetOnTopByHandle(this.hwnd, onTop, library)
  }

  async setState(
    state: SetWindowState,
    library?: LibraryParam<typeof winSetStateByHandle>,
  ): Promise<boolean> {
    return winSetStateByHandle(this.hwnd, state, library)
  }

  async setTitle(
    title: string,
    library?: LibraryParam<typeof winSetTitleByHandle>,
  ): Promise<boolean> {
    return winSetTitleByHandle(this.hwnd, title, library)
  }

  async setTransparency(
    transparency: number,
    library?: LibraryParam<typeof winSetTransByHandle>,
  ): Promise<boolean> {
    return winSetTransByHandle(this.hwnd, transparency, library)
  }

  async waitActive(
    timeoutSecs = Infinity,
    library?: LibraryParam<typeof winWaitActiveByHandle>,
  ): Promise<boolean> {
    if (timeoutSecs === Infinity) timeoutSecs = 0
    return winWaitActiveByHandle(this.hwnd, timeoutSecs, library)
  }

  async waitClose(
    timeoutSecs = Infinity,
    library?: LibraryParam<typeof winWaitCloseByHandle>,
  ): Promise<boolean> {
    if (timeoutSecs === Infinity) timeoutSecs = 0
    return winWaitCloseByHandle(this.hwnd, timeoutSecs, library)
  }

  async waitNotActive(
    timeoutSecs = Infinity,
    library?: LibraryParam<typeof winWaitNotActiveByHandle>,
  ): Promise<boolean> {
    if (timeoutSecs === Infinity) timeoutSecs = 0
    return winWaitNotActiveByHandle(this.hwnd, timeoutSecs, library)
  }
}
