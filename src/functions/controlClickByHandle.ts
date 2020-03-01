import { Hwnd, MouseButton } from '../types'
import { inWstrOfString } from '../wrap-utils'
import { lib } from '../lowlevel'

export async function controlClickByHandle(
  hwnd: Hwnd,
  button = MouseButton.Default,
  numClicks = 1,
  nX = -0x7fff_ffff,
  nY = -0x7fff_ffff,
): Promise<boolean> {
  return new Promise(resolve => {
    const buttonBuffer = inWstrOfString(button)
    lib.AU3_ControlClickByHandle.async(
      hwnd.toNumber(),
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
