import { WindowDescription, descriptor } from 'autoit-advanced-descriptor'
import { inWstrOfString, stringOfOutWstr } from './wrap-utils'
import { MouseButton } from './functions'
import { lib } from './lowlevel'

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
): Promise<number> {
  if (window.type !== 'string') window = descriptor(window)
  return new Promise(resolve => {
    const windowBuffer = inWstrOfString(window)
    const textBuffer = inWstrOfString(text)
    const buttonBuffer = inWstrOfString(button)
    lib.AU3_ControlClick.async(
      windowBuffer,
      textBuffer,
      buttonBuffer,
      numClicks,
      nX,
      nY,
      resolve,
    )
  })
}
