// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { inWstrOfString } from '../../wrap-utils'

export async function controlSetTextByHandle(
  window: Hwnd,
  control: Hwnd,
  text: string,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ControlSetTextByHandle'>,
): Promise<boolean> {
  const textBuffer = inWstrOfString(text)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_ControlSetTextByHandle(
    window.toNumber(),
    control.toNumber(),
    textBuffer,
  )
  return result !== 0
}
