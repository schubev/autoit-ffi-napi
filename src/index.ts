import { WindowDescription, descriptor } from 'autoit-advanced-descriptor'
import { inWstrOfString, stringOfOutWstr } from './wrap-utils'
import { MouseButton } from './function-defs'
import { lib } from './lowlevel'
import { AutoitOptions, AutoitOptionsList, AutoitOption } from './options'

export interface Hwnd {
  _tag: 'hwnd'
}

function numberOfHwnd(hwnd: Hwnd): number {
  return hwnd as any
}

function autoitSetOption(key: AutoitOption, value: number): Promise<number> {
  const keyBuffer = inWstrOfString(key)
  return new Promise(resolve => {
    lib.AU3_AutoItSetOption(keyBuffer, value, resolve)
  })
}

export async function autoitSetOptions(
  options: Readonly<AutoitOptions>,
): Promise<AutoitOptions> {
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
    const previousValue = await autoitSetOption(optionKey, finalValue)
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

export async function clipGet(clipSize = 0x200): Promise<string> {
  return new Promise(resolve => {
    const clipBuffer = Buffer.alloc(clipSize * 2)
    lib.AU3_ClipGet.async(clipBuffer, clipSize, () => {
      resolve(stringOfOutWstr(clipBuffer))
    })
  })
}

export async function clipPut(clip: string): Promise<boolean> {
  const clipBuffer = inWstrOfString(clip)
  return new Promise(resolve => {
    lib.AU3_ClipPut(clipBuffer, (status: 0 | 1) => {
      resolve(Boolean(status))
    })
  })
}

export async function controlClick(
  window: string | WindowDescription,
  text: string,
  button = MouseButton.Default,
  numClicks = 1,
  nX = -0x7fff_ffff,
  nY = -0x7fff_ffff,
): Promise<boolean> {
  const windowString = typeof window === 'string' ? window : descriptor(window)
  return new Promise(resolve => {
    const windowStringBuffer = inWstrOfString(windowString)
    const textBuffer = inWstrOfString(text)
    const buttonBuffer = inWstrOfString(button)
    lib.AU3_ControlClick.async(
      windowStringBuffer,
      textBuffer,
      buttonBuffer,
      numClicks,
      nX,
      nY,
      (status: number) => {
        resolve(Boolean(status))
      },
    )
  })
}

export async function controlClickByHandle(
  hwnd: Hwnd,
  button = MouseButton.Default,
  numClicks = 1,
  nX = -0x7fff_ffff,
  nY = -0x7fff_ffff,
): Promise<boolean> {
  return new Promise(resolve => {
    const buttonBuffer = inWstrOfString(button)
    lib.AU3_ControlClickByHandle.async(
      numberOfHwnd(hwnd),
      buttonBuffer,
      numClicks,
      nX,
      nY,
      (status: number) => {
        resolve(Boolean(status))
      },
    )
  })
}
