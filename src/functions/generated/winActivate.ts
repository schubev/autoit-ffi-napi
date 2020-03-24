// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'

export async function winActivate(
  windowDescription: WindowDescription,
  windowText: string,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinActivate'>,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinActivate(
    windowDescriptionBuffer,
    windowTextBuffer,
  )
  return result !== 0
}
