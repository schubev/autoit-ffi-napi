// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_WinClose = promisify(lib.AU3_WinClose.async)

export async function winClose(
  windowDescription: WindowDescription,
  windowText: string,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const result = await AU3_WinClose(windowDescriptionBuffer, windowTextBuffer)
  return result === 1
}
