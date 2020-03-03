// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_ControlShow = promisify(lib.AU3_ControlShow.async)

export async function controlShow(
  windowDescription: WindowDescription,
  windowText: string,
  controlDescription: WindowDescription,
): Promise<number> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  return AU3_ControlShow(
    windowDescriptionBuffer,
    windowTextBuffer,
    controlDescriptionBuffer,
  )
}