import { WindowDescription, descriptor } from 'autoit-advanced-descriptor'
import { inWstrOfString, stringOfOutWstr } from './wrap-utils'
import { MouseButton } from './functions'
import { lib } from './lowlevel'

export interface Hwnd {
  _tag: 'hwnd'
}

function numberOfHwnd(hwnd: Hwnd): number {
  return hwnd as any
}
function hwndOfNumber(hwnd: number): Hwnd {
  return hwnd as any
}

export function clipPut(clip: string): Promise<void> {
  return new Promise(resolve => {
    const clipBuffer = inWstrOfString(clip)
    lib.AU3_ClipPut.async(clipBuffer, resolve)
  })
}

export function clipGet(clipSize = 0x200): Promise<string> {
  return new Promise(resolve => {
    const clipBuffer = Buffer.alloc(clipSize * 2)
    lib.AU3_ClipGet.async(clipBuffer, clipSize, () => {
      resolve(stringOfOutWstr(clipBuffer))
    })
  })
}

export function controlClick(
  window: string | WindowDescription,
  text: string,
  button = MouseButton.Default,
  numClicks = 1,
  nX = -0x7fff_ffff,
  nY = -0x7fff_ffff,
): Promise<boolean> {
  const windowString = typeof window === 'string' ? window : descriptor(window)
  return new Promise(resolve => {
    const windowStringBuffer = inWstrOfString(windowString)
    const textBuffer = inWstrOfString(text)
    const buttonBuffer = inWstrOfString(button)
    lib.AU3_ControlClick.async(
      windowStringBuffer,
      textBuffer,
      buttonBuffer,
      numClicks,
      nX,
      nY,
      (status: number) => {
        resolve(Boolean(status))
      },
    )
  })
}

export function controlClickByHandle(
  hwnd: Hwnd,
  button = MouseButton.Default,
  numClicks = 1,
  nX = -0x7fff_ffff,
  nY = -0x7fff_ffff,
): Promise<boolean> {
  return new Promise(resolve => {
    const buttonBuffer = inWstrOfString(button)
    lib.AU3_ControlClickByHandle.async(
      numberOfHwnd(hwnd),
      buttonBuffer,
      numClicks,
      nX,
      nY,
      (status: number) => {
        resolve(Boolean(status))
      },
    )
  })
}
