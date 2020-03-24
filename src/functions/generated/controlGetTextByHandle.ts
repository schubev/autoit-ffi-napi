// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils'

export async function controlGetTextByHandle(
  window: Hwnd,
  control: Hwnd,
  controlTextSize = 512,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetTextByHandle'>,
): Promise<string> {
  const outBuffer = outWstrOfSize(controlTextSize)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_ControlGetTextByHandle(
    window.toNumber(),
    control.toNumber(),
    outBuffer,
    controlTextSize,
  )
  return stringOfOutWstr(outBuffer)
}
