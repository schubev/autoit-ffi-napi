// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function winCloseByHandle(
  window: Hwnd,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinCloseByHandle'>,
): Promise<boolean> {
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinCloseByHandle(window.toNumber())
  return result !== 0
}
