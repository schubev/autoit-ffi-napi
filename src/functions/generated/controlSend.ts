// This file is generated by src/codegen/function-gen.ts.
import { SendMode } from '../../types'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'

async function controlSend(windowDescription: string | WindowDescription, windowText: string, controlDescription: string | WindowDescription, text: string, mode: SendMode): Promise<number> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const textBuffer = inWstrOfString(text)
  return new Promise(resolve => {
    lib.AU3_ControlSend.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer, mode, resolve)
  })
}