// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function winActivateByHandle(
  window: Hwnd,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinActivateByHandle'>,
): Promise<boolean> {
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinActivateByHandle(window.toNumber())
  return result !== 0
}
