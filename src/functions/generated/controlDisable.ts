// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'

export async function controlDisable(
  windowDescription: WindowDescription,
  windowText: string,
  controlDescription: WindowDescription,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ControlDisable'>,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_ControlDisable(
    windowDescriptionBuffer,
    windowTextBuffer,
    controlDescriptionBuffer,
  )
  return result !== 0
}
