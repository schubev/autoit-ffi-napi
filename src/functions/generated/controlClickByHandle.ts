// This file is generated by src/codegen/function-gen.ts.
import { Hwnd, MouseButton } from '../../types'
import { inWstrOfString } from '../../wrap-utils'
import { lib } from '../../lowlevel'

async function controlClickByHandle(window: Hwnd, control: Hwnd, button: MouseButton, numClicks: number, nX: number, nY: number): Promise<number> {
  const buttonBuffer = inWstrOfString(button)
  return new Promise(resolve => {
    lib.AU3_ControlClickByHandle.async(window, control, buttonBuffer, numClicks, nX, nY, resolve)
  })
}