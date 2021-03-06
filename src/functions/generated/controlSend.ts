// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { SendMode } from '../../types'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'

export async function controlSend(
  windowDescription: WindowDescription,
  windowText: string,
  controlDescription: WindowDescription,
  text: string,
  mode = SendMode.Default,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ControlSend'>,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const textBuffer = inWstrOfString(text)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_ControlSend(
    windowDescriptionBuffer,
    windowTextBuffer,
    controlDescriptionBuffer,
    textBuffer,
    mode,
  )
  return result !== 0
}
