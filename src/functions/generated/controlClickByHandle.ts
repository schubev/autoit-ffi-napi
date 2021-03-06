// This file is generated by src/codegen/function-gen.ts.
import { Hwnd, MouseButton } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { inWstrOfString } from '../../wrap-utils'

export async function controlClickByHandle(
  window: Hwnd,
  control: Hwnd,
  button: MouseButton,
  numClicks: number,
  nX = -2147483647,
  nY = -2147483647,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ControlClickByHandle'>,
): Promise<boolean> {
  const buttonBuffer = inWstrOfString(button)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_ControlClickByHandle(
    window.toNumber(),
    control.toNumber(),
    buttonBuffer,
    numClicks,
    nX,
    nY,
  )
  return result !== 0
}
