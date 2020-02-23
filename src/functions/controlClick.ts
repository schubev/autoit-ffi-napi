import { WindowDescription, descriptor } from 'autoit-advanced-descriptor'
import { MouseButton } from '../function-defs'
import { inWstrOfString } from '../wrap-utils'
import { lib } from '../lowlevel'

export async function controlClick(
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
