import { inWstrOfString } from '../wrap-utils'
import { PromisifiedAutoitLib } from '../generated-lib-type'
import { AutoitOptions, AutoitOption } from '../options'

async function autoitSetOption(
  key: AutoitOption,
  value: number,
  lib: Pick<PromisifiedAutoitLib, 'AU3_AutoItSetOption'>,
): Promise<number> {
  const keyBuffer = inWstrOfString(key)
  return lib.AU3_AutoItSetOption(keyBuffer, value)
}

export async function autoitSetOptions(
  options: Readonly<AutoitOptions>,
  library?: Pick<PromisifiedAutoitLib, 'AU3_AutoItSetOption'>,
): Promise<AutoitOptions> {
  const lib = library ?? (await import('../default-lib')).lib
  const previousOptions: AutoitOptions = {}
  for (const optionKey in options) {
    let finalValue: number
    switch (optionKey) {
      case 'TrayMenuMode':
      case 'GuiResizeMode': {
        const values = options[optionKey]
        if (values === undefined) continue
        finalValue = (values as number[]).reduce((a, b) => a | b, 0)
        break
      }
      case 'GuiDataSeparatorChar': {
        const value = options[optionKey]
        if (value === undefined || value === '') continue
        const intValue = value.charCodeAt(0)
        if (intValue > 0x7fff) continue
        finalValue = intValue
        break
      }
      case 'CaretCoordMode':
      case 'ExpandEnvStrings':
      case 'ExpandVarStrings':
      case 'GuiCloseOnEsc':
      case 'GuiOnEventMode':
      case 'GuiEventOptions':
      case 'MouseClickDelay':
      case 'MouseClickDownDelay':
      case 'MouseClickDragDelay':
      case 'MouseCoordMode':
      case 'MustDeclareVars':
      case 'PixelCoordMode':
      case 'SendAttachMode':
      case 'SendCapslockMode':
      case 'SendKeyDelay':
      case 'SendKeyDownDelay':
      case 'TcpTimeout':
      case 'TrayAutoPause':
      case 'TrayIconDebug':
      case 'TrayIconHide':
      case 'TrayOnEventMode':
      case 'WinDetectHiddenText':
      case 'WinSearchChildren':
      case 'WinTextMatchMode':
      case 'WinTitleMatchMode':
      case 'WinWaitDelay': {
        const value = options[optionKey]
        if (value === undefined) continue
        finalValue = value as number
        break
      }
      default:
        continue
    }
    const previousValue = await autoitSetOption(optionKey, finalValue, lib)
    // TODO: Check error status
    switch (optionKey) {
      case 'TrayMenuMode':
      case 'GuiResizeMode': {
        // TODO: Decompose option value
        previousOptions[optionKey] = [previousValue]
        break
      }
      case 'GuiDataSeparatorChar': {
        previousOptions[optionKey] = String.fromCodePoint(previousValue)
        break
      }
      case 'CaretCoordMode':
      case 'ExpandEnvStrings':
      case 'ExpandVarStrings':
      case 'GuiCloseOnEsc':
      case 'GuiOnEventMode':
      case 'GuiEventOptions':
      case 'MouseClickDelay':
      case 'MouseClickDownDelay':
      case 'MouseClickDragDelay':
      case 'MouseCoordMode':
      case 'MustDeclareVars':
      case 'PixelCoordMode':
      case 'SendAttachMode':
      case 'SendCapslockMode':
      case 'SendKeyDelay':
      case 'SendKeyDownDelay':
      case 'TcpTimeout':
      case 'TrayAutoPause':
      case 'TrayIconDebug':
      case 'TrayIconHide':
      case 'TrayOnEventMode':
      case 'WinDetectHiddenText':
      case 'WinSearchChildren':
      case 'WinTextMatchMode':
      case 'WinTitleMatchMode':
      case 'WinWaitDelay': {
        // TODO: Figure out why I cannot assign number to this
        previousOptions[optionKey] = previousValue as any
        break
      }
    }
  }
  return previousOptions
}
