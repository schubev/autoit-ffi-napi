// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import {
  inWstrOfString,
  inWstrOfWindowDescription,
  outWstrOfSize,
  stringOfOutWstr,
} from '../../wrap-utils'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_ControlGetText = promisify(lib.AU3_ControlGetText.async)

export async function controlGetText(
  windowDescription: WindowDescription,
  windowText: string,
  controlDescription: WindowDescription,
  controlTextSize = 512,
): Promise<string> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const outBuffer = outWstrOfSize(controlTextSize)
  await AU3_ControlGetText(
    windowDescriptionBuffer,
    windowTextBuffer,
    controlDescriptionBuffer,
    outBuffer,
    controlTextSize,
  )
  return stringOfOutWstr(outBuffer)
}