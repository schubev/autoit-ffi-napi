// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function winWaitActiveByHandle(
  window: Hwnd,
  timeoutSeconds = 0,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitActiveByHandle'>,
): Promise<boolean> {
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinWaitActiveByHandle(
    window.toNumber(),
    timeoutSeconds,
  )
  return result !== 0
}
