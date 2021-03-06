import { functions, FunctionDef, Return, Param } from '../function-defs'
import { makePrettyFunctionName, generateFunction } from '../function-gen'

describe(makePrettyFunctionName, () => {
  test.each([
    ['AU3_ClipPut', 'clipPut'],
    ['AU3_Init', 'init'],
    ['AU3_error', 'error'],
    ['AU3_AutoItSetOption', 'autoitSetOption'],
    ['AU3_ClipGet', 'clipGet'],
    ['AU3_ClipPut', 'clipPut'],
    ['AU3_ControlClick', 'controlClick'],
    ['AU3_ControlClickByHandle', 'controlClickByHandle'],
    ['AU3_ControlCommand', 'controlCommand'],
    ['AU3_ControlCommandByHandle', 'controlCommandByHandle'],
    ['AU3_ControlListView', 'controlListView'],
    ['AU3_ControlListViewByHandle', 'controlListViewByHandle'],
    ['AU3_ControlDisable', 'controlDisable'],
    ['AU3_ControlDisableByHandle', 'controlDisableByHandle'],
    ['AU3_ControlEnable', 'controlEnable'],
    ['AU3_ControlEnableByHandle', 'controlEnableByHandle'],
    ['AU3_ControlFocus', 'controlFocus'],
    ['AU3_ControlFocusByHandle', 'controlFocusByHandle'],
    ['AU3_ControlGetFocus', 'controlGetFocus'],
    ['AU3_ControlGetFocusByHandle', 'controlGetFocusByHandle'],
    ['AU3_ControlGetHandle', 'controlGetHandle'],
    ['AU3_ControlGetHandleAsText', 'controlGetHandleAsText'],
    ['AU3_ControlGetPos', 'controlGetPos'],
    ['AU3_ControlGetPosByHandle', 'controlGetPosByHandle'],
    ['AU3_ControlGetText', 'controlGetText'],
    ['AU3_ControlGetTextByHandle', 'controlGetTextByHandle'],
    ['AU3_ControlHide', 'controlHide'],
    ['AU3_ControlHideByHandle', 'controlHideByHandle'],
    ['AU3_ControlMove', 'controlMove'],
    ['AU3_ControlMoveByHandle', 'controlMoveByHandle'],
    ['AU3_ControlSend', 'controlSend'],
    ['AU3_ControlSendByHandle', 'controlSendByHandle'],
    ['AU3_ControlSetText', 'controlSetText'],
    ['AU3_ControlSetTextByHandle', 'controlSetTextByHandle'],
    ['AU3_ControlShow', 'controlShow'],
    ['AU3_ControlShowByHandle', 'controlShowByHandle'],
    ['AU3_ControlTreeView', 'controlTreeView'],
    ['AU3_ControlTreeViewByHandle', 'controlTreeViewByHandle'],
    ['AU3_DriveMapAdd', 'driveMapAdd'],
    ['AU3_DriveMapDel', 'driveMapDel'],
    ['AU3_DriveMapGet', 'driveMapGet'],
    ['AU3_IsAdmin', 'isAdmin'],
    ['AU3_MouseClick', 'mouseClick'],
    ['AU3_MouseClickDrag', 'mouseClickDrag'],
    ['AU3_MouseDown', 'mouseDown'],
    ['AU3_MouseGetCursor', 'mouseGetCursor'],
    ['AU3_MouseGetPos', 'mouseGetPos'],
    ['AU3_MouseMove', 'mouseMove'],
    ['AU3_MouseUp', 'mouseUp'],
    ['AU3_MouseWheel', 'mouseWheel'],
    ['AU3_Opt', 'opt'],
    ['AU3_PixelChecksum', 'pixelChecksum'],
    ['AU3_PixelGetColor', 'pixelGetColor'],
    ['AU3_PixelSearch', 'pixelSearch'],
    ['AU3_ProcessClose', 'processClose'],
    ['AU3_ProcessExists', 'processExists'],
    ['AU3_ProcessSetPriority', 'processSetPriority'],
    ['AU3_ProcessWait', 'processWait'],
    ['AU3_ProcessWaitClose', 'processWaitClose'],
    ['AU3_Run', 'run'],
    ['AU3_RunWait', 'runWait'],
    ['AU3_RunAs', 'runAs'],
    ['AU3_RunAsWait', 'runAsWait'],
    ['AU3_Send', 'send'],
    ['AU3_Shutdown', 'shutdown'],
    ['AU3_Sleep', 'sleep'],
    ['AU3_StatusbarGetText', 'statusbarGetText'],
    ['AU3_StatusbarGetTextByHandle', 'statusbarGetTextByHandle'],
    ['AU3_ToolTip', 'toolTip'],
    ['AU3_WinActivate', 'winActivate'],
    ['AU3_WinActivateByHandle', 'winActivateByHandle'],
    ['AU3_WinActive', 'winActive'],
    ['AU3_WinActiveByHandle', 'winActiveByHandle'],
    ['AU3_WinClose', 'winClose'],
    ['AU3_WinCloseByHandle', 'winCloseByHandle'],
    ['AU3_WinExists', 'winExists'],
    ['AU3_WinExistsByHandle', 'winExistsByHandle'],
    ['AU3_WinGetCaretPos', 'winGetCaretPos'],
    ['AU3_WinGetClassList', 'winGetClassList'],
    ['AU3_WinGetClassListByHandle', 'winGetClassListByHandle'],
    ['AU3_WinGetClientSize', 'winGetClientSize'],
    ['AU3_WinGetClientSizeByHandle', 'winGetClientSizeByHandle'],
    ['AU3_WinGetHandle', 'winGetHandle'],
    ['AU3_WinGetHandleAsText', 'winGetHandleAsText'],
    ['AU3_WinGetPos', 'winGetPos'],
    ['AU3_WinGetPosByHandle', 'winGetPosByHandle'],
    ['AU3_WinGetProcess', 'winGetProcess'],
    ['AU3_WinGetProcessByHandle', 'winGetProcessByHandle'],
    ['AU3_WinGetState', 'winGetState'],
    ['AU3_WinGetStateByHandle', 'winGetStateByHandle'],
    ['AU3_WinGetText', 'winGetText'],
    ['AU3_WinGetTextByHandle', 'winGetTextByHandle'],
    ['AU3_WinGetTitle', 'winGetTitle'],
    ['AU3_WinGetTitleByHandle', 'winGetTitleByHandle'],
    ['AU3_WinKill', 'winKill'],
    ['AU3_WinKillByHandle', 'winKillByHandle'],
    ['AU3_WinMenuSelectItem', 'winMenuSelectItem'],
    ['AU3_WinMenuSelectItemByHandle', 'winMenuSelectItemByHandle'],
    ['AU3_WinMinimizeAll', 'winMinimizeAll'],
    ['AU3_WinMinimizeAllUndo', 'winMinimizeAllUndo'],
    ['AU3_WinMove', 'winMove'],
    ['AU3_WinMoveByHandle', 'winMoveByHandle'],
    ['AU3_WinSetOnTop', 'winSetOnTop'],
    ['AU3_WinSetOnTopByHandle', 'winSetOnTopByHandle'],
    ['AU3_WinSetState', 'winSetState'],
    ['AU3_WinSetStateByHandle', 'winSetStateByHandle'],
    ['AU3_WinSetTitle', 'winSetTitle'],
    ['AU3_WinSetTitleByHandle', 'winSetTitleByHandle'],
    ['AU3_WinSetTrans', 'winSetTrans'],
    ['AU3_WinSetTransByHandle', 'winSetTransByHandle'],
    ['AU3_WinWait', 'winWait'],
    ['AU3_WinWaitByHandle', 'winWaitByHandle'],
    ['AU3_WinWaitActive', 'winWaitActive'],
    ['AU3_WinWaitActiveByHandle', 'winWaitActiveByHandle'],
    ['AU3_WinWaitClose', 'winWaitClose'],
    ['AU3_WinWaitCloseByHandle', 'winWaitCloseByHandle'],
    ['AU3_WinWaitNotActive', 'winWaitNotActive'],
    ['AU3_WinWaitNotActiveByHandle', 'winWaitNotActiveByHandle'],
  ])('%p becomes %p', (input, expected) => {
    expect(makePrettyFunctionName(input)).toEqual(expected)
  })
})

describe(generateFunction, () => {
  it('creates the most basic function', () => {
    const voidvoidfoo: FunctionDef = {
      return: Return.Void,
      params: [],
      generate: true,
    }
    expect(generateFunction('AU3_FooBar', voidvoidfoo)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function fooBar(library?: Pick<PromisifiedAutoitLib, 'AU3_FooBar'>): Promise<void> {

  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_FooBar()
  
}`,
    )
  })

  it('creates a function with a single parameter', () => {
    const voidintfoo: FunctionDef = {
      return: Return.Void,
      params: [{ key: 'qux', type: Param.Int }],
      generate: true,
    }
    expect(generateFunction('AU3_FooBar', voidintfoo)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function fooBar(qux: number, library?: Pick<PromisifiedAutoitLib, 'AU3_FooBar'>): Promise<void> {

  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_FooBar(qux)
  
}`,
    )
  })

  it('creates a function with two parameters', () => {
    const voidintfoo: FunctionDef = {
      return: Return.Void,
      params: [
        { key: 'qux', type: Param.Int },
        { key: 'baz', type: Param.Int },
      ],
      generate: true,
    }
    expect(generateFunction('AU3_FooBar', voidintfoo)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function fooBar(qux: number, baz: number, library?: Pick<PromisifiedAutoitLib, 'AU3_FooBar'>): Promise<void> {

  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_FooBar(qux, baz)
  
}`,
    )
  })

  it('generates the AU3_error function', () => {
    const name = 'AU3_error'
    const functionDef = functions[name]
    expect(generateFunction(name, functionDef)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function error(library?: Pick<PromisifiedAutoitLib, 'AU3_error'>): Promise<number> {

  const lib = library ?? (await import('../../default-lib')).lib
  return lib.AU3_error()
  
}`,
    )
  })

  it('generates the AU3_ClipPut function', () => {
    const name = 'AU3_ClipPut'
    const functionDef = functions[name]
    expect(generateFunction(name, functionDef)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { inWstrOfString } from '../../wrap-utils'

export async function clipPut(clip: string, library?: Pick<PromisifiedAutoitLib, 'AU3_ClipPut'>): Promise<void> {
  const clipBuffer = inWstrOfString(clip)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_ClipPut(clipBuffer)
  
}`,
    )
  })

  it('generates the AU3_ControlClick function', () => {
    const name = 'AU3_ControlClick'
    const functionDef = functions[name]
    expect(generateFunction(name, functionDef)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { MouseButton } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'

export async function controlClick(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, button: MouseButton, numClicks: number, nX = -2147483647, nY = -2147483647, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlClick'>): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const buttonBuffer = inWstrOfString(button)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_ControlClick(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, buttonBuffer, numClicks, nX, nY)
  return result !== 0
}`,
    )
  })

  it('generates the AU3_WinGetTitle function', () => {
    const name = 'AU3_WinGetTitle'
    const functionDef = functions[name]
    expect(generateFunction(name, functionDef)).toEqual(
      `// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, stringOfOutWstr } from '../../wrap-utils'

export async function winGetTitle(windowDescription: WindowDescription, windowText: string, titleSize = 512, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetTitle'>): Promise<string> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const outBuffer = outWstrOfSize(titleSize)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_WinGetTitle(windowDescriptionBuffer, windowTextBuffer, outBuffer, titleSize)
  return stringOfOutWstr(outBuffer)
}`,
    )
  })
})
