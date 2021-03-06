// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfWindowDescription } from '../../wrap-utils'

export async function controlGetHandle(
  window: Hwnd,
  control: WindowDescription,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetHandle'>,
): Promise<Hwnd | null> {
  const controlBuffer = inWstrOfWindowDescription(control)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_ControlGetHandle(
    window.toNumber(),
    controlBuffer,
  )
  return result === 0 ? null : Hwnd.ofNumber(result)
}
