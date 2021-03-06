// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils'

export async function winGetTitleByHandle(
  window: Hwnd,
  titleSize = 512,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetTitleByHandle'>,
): Promise<string> {
  const outBuffer = outWstrOfSize(titleSize)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_WinGetTitleByHandle(window.toNumber(), outBuffer, titleSize)
  return stringOfOutWstr(outBuffer)
}
