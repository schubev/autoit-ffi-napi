// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'

export async function winGetProcess(
  windowDescription: WindowDescription,
  windowText: string,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetProcess'>,
): Promise<number> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const lib = library ?? (await import('../../default-lib')).lib
  return lib.AU3_WinGetProcess(windowDescriptionBuffer, windowTextBuffer)
}
