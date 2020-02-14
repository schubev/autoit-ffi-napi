/* eslint @typescript-eslint/camelcase: "off" */

export enum Param {
  Int = 'Int',
  InWstr = 'IntWstr',
  InWstrCommand = 'InWstrCommand',
  InWstrCommandExtra = 'InWstrCommandExtra',
  InWstrDescription = 'InWstrDescription',
  InWstrMouseButton = 'InWstrMouseButton',
  OutWstr = 'OutWstr',
  OutWstrSize = 'OutWstrSize',
  OutRectangle = 'OutRectangle',
  Hwnd = 'Hwnd',
  SendMode = 'SendMode',
}

export enum Return {
  Void = 'Void',
  Int = 'Int',
  Hwnd = 'Hwnd',
}

export enum SendMode {
  Default = 0,
  Raw = 1,
}

export enum MouseButton {
  Default = '',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Primary = 'primary',
  Main = 'main',
  Secondary = 'secondary',
  Menu = 'menu',
}

export type ParamDef = [string, Param] | [string, Param.Int, number]
export type FunctionDef = [Return, ParamDef[]]

export const defaultInt = -0x7fffffff

const windowSelection: ParamDef[] = [
  ['title', Param.InWstrDescription],
  ['text', Param.InWstr],
]
const controlSelection: ParamDef[] = [
  ...windowSelection,
  ['control', Param.InWstrDescription],
]
const windowByHwnd: ParamDef[] = [['window', Param.Hwnd]]
const controlByHwnd: ParamDef[] = [...windowByHwnd, ['control', Param.Hwnd]]

export const functions: Record<string, FunctionDef> = {
  AU3_Init: [Return.Void, []],
  AU3_error: [Return.Int, []],
  AU3_AutoItSetOption: [
    Return.Int,
    [
      ['option', Param.InWstr],
      ['value', Param.Int],
    ],
  ],
  AU3_ClipGet: [
    Return.Void,
    [
      ['clip', Param.OutWstr],
      ['clipSize', Param.OutWstrSize],
    ],
  ],
  AU3_ClipPut: [Return.Void, [['clip', Param.InWstr]]],
  AU3_ControlClick: [
    Return.Int,
    [
      ...controlSelection,
      ['button', Param.InWstrMouseButton],
      ['numClicks', Param.Int],
      ['nX', Param.Int, -0x7fff_ffff],
      ['nY', Param.Int, -0x7fff_ffff],
    ],
  ],
  AU3_ControlClickByHandle: [
    Return.Int,
    [
      ...controlByHwnd,
      ['button', Param.InWstrMouseButton],
      ['numClicks', Param.Int],
      ['nX', Param.Int, -0x7fff_ffff],
      ['nY', Param.Int, -0x7fff_ffff],
    ],
  ],
  AU3_ControlCommand: [
    // polymorphic return type
    Return.Void,
    [
      ...controlSelection,
      ['command', Param.InWstrCommand],
      ['extra', Param.InWstrCommandExtra],
      ['result', Param.OutWstr],
      ['resultSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlCommandByHandle: [
    // polymorphic return type
    Return.Void,
    [
      ...controlByHwnd,
      ['command', Param.InWstrCommand],
      ['extra', Param.InWstrCommandExtra],
      ['result', Param.OutWstr],
      ['resultSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlListView: [
    Return.Void,
    [
      ...controlSelection,
      ['command', Param.InWstrCommand],
      ['extra1', Param.InWstrCommandExtra],
      ['extra2', Param.InWstrCommandExtra],
      ['result', Param.OutWstr],
      ['resultSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlListViewByHandle: [
    Return.Void,
    [
      ...controlByHwnd,
      ['command', Param.InWstrCommand],
      ['extra1', Param.InWstrCommandExtra],
      ['extra2', Param.InWstrCommandExtra],
      ['result', Param.OutWstr],
      ['resultSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlDisable: [Return.Int, [...controlSelection]],
  AU3_ControlDisableByHandle: [Return.Int, [...controlByHwnd]],
  AU3_ControlEnable: [Return.Int, [...controlSelection]],
  AU3_ControlEnableByHandle: [Return.Int, [...controlByHwnd]],
  AU3_ControlFocus: [Return.Int, [...controlSelection]],
  AU3_ControlFocusByHandle: [Return.Int, [...controlByHwnd]],
  AU3_ControlGetFocus: [
    Return.Void,
    [
      ...windowSelection,
      ['control', Param.OutWstr],
      ['controlSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlGetFocusByHandle: [
    Return.Void,
    [
      ['window', Param.Hwnd],
      ['control', Param.OutWstr],
      ['controlSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlGetHandle: [
    Return.Hwnd,
    [
      ['window', Param.Hwnd],
      ['control', Param.InWstrDescription],
    ],
  ],
  // AU3_ControlGetHandleAsText: [
  //   'void',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPCWSTR szControl, LPWSTR szRetText, int nBufSize)',
  // ],
  AU3_ControlGetPos: [
    Return.Int,
    [...controlSelection, ['rectangle', Param.OutRectangle]],
  ],
  AU3_ControlGetPosByHandle: [
    Return.Int,
    [...controlByHwnd, ['rectangle', Param.OutRectangle]],
  ],
  AU3_ControlGetText: [
    Return.Void,
    [
      ...controlSelection,
      ['controlText', Param.OutWstr],
      ['controlTextSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlGetTextByHandle: [
    Return.Void,
    [
      ...controlByHwnd,
      ['controlText', Param.OutWstr],
      ['controlTextSize', Param.OutWstrSize],
    ],
  ],
  AU3_ControlHide: [Return.Int, [...controlSelection]],
  AU3_ControlHideByHandle: [Return.Int, [...controlByHwnd]],
  AU3_ControlMove: [
    Return.Int,
    [
      ...controlSelection,
      ['nX', Param.Int],
      ['nY', Param.Int],
      ['nWidth', Param.Int, -1],
      ['nHeight', Param.Int, -1],
    ],
  ],
  AU3_ControlMoveByHandle: [
    Return.Int,
    [
      ...controlByHwnd,
      ['nX', Param.Int],
      ['nY', Param.Int],
      ['nWidth', Param.Int, -1],
      ['nHeight', Param.Int, -1],
    ],
  ],
  AU3_ControlSend: [
    Return.Int,
    [...controlSelection, ['text', Param.InWstr], ['mode', Param.SendMode]],
  ],
  AU3_ControlSendByHandle: [
    Return.Int,
    [...controlByHwnd, ['text', Param.InWstr], ['mode', Param.SendMode]],
  ],
  AU3_ControlSetText: [
    Return.Int,
    [...controlSelection, ['text', Param.InWstr]],
  ],
  AU3_ControlSetTextByHandle: [
    Return.Int,
    [...controlByHwnd, ['text', Param.InWstr]],
  ],
  AU3_ControlShow: [Return.Int, [...controlSelection]],
  AU3_ControlShowByHandle: [Return.Int, [...controlByHwnd]],
  // AU3_ControlTreeView: [
  //   'void',
  //   '(LPCWSTR szTitle, LPCWSTR szText, LPCWSTR szControl, LPCWSTR szCommand, LPCWSTR szExtra1, LPCWSTR szExtra2, LPWSTR szResult, int nBufSize)',
  // ],
  // AU3_ControlTreeViewByHandle: [
  //   'void',
  //   '(HWND hWnd, HWND hCtrl, LPCWSTR szCommand, LPCWSTR szExtra1, LPCWSTR szExtra2, LPWSTR szResult, int nBufSize)',
  // ],
  // AU3_DriveMapAdd: [
  //   'void',
  //   '(LPCWSTR szDevice, LPCWSTR szShare, int nFlags, /*[in,defaultvalue("")]*/LPCWSTR szUser, /*[in,defaultvalue("")]*/LPCWSTR szPwd, LPWSTR szResult, int nBufSize)',
  // ],
  // AU3_DriveMapDel: [Return.Int, '(LPCWSTR szDevice)'],
  // AU3_DriveMapGet: [
  //   'void',
  //   '(LPCWSTR szDevice, LPWSTR szMapping, int nBufSize)',
  // ],
  // AU3_IsAdmin: [Return.Int, '(void)'],
  // AU3_MouseClick: [
  //   Return.Int,
  //   '(/*[in,defaultvalue("LEFT")]*/LPCWSTR szButton, int nX = AU3_INTDEFAULT, int nY = AU3_INTDEFAULT, int nClicks = 1, int nSpeed = -1)',
  // ],
  // AU3_MouseClickDrag: [
  //   Return.Int,
  //   '(LPCWSTR szButton, int nX1, int nY1, int nX2, int nY2, int nSpeed = -1)',
  // ],
  // AU3_MouseDown: [
  //   Return.Void,
  //   '(/*[in,defaultvalue("LEFT")]*/LPCWSTR szButton)',
  // ],
  // AU3_MouseGetCursor: [Return.Int, '(void)'],
  // AU3_MouseGetPos: [Return.Void, '(LPPOINT lpPoint)'],
  // AU3_MouseMove: [Return.Int, '(int nX, int nY, int nSpeed = -1)'],
  // AU3_MouseUp: [Return.Void, '(/*[in,defaultvalue("LEFT")]*/LPCWSTR szButton)'],
  // AU3_MouseWheel: [Return.Void, '(LPCWSTR szDirection, int nClicks)'],
  // AU3_Opt: [Return.Int, '(LPCWSTR szOption, int nValue)'],
  // int: ['unsigned', ' AU3_PixelChecksum(LPRECT lpRect, int nStep = 1)'],
  // AU3_PixelGetColor: [Return.Int, '(int nX, int nY)'],
  // AU3_PixelSearch: [
  //   'void',
  //   '(LPRECT lpRect, int nCol, /*default 0*/int nVar, /*default 1*/int nStep, LPPOINT pPointResult)',
  // ],
  // AU3_ProcessClose: [Return.Int, '(LPCWSTR szProcess)'],
  // AU3_ProcessExists: [Return.Int, '(LPCWSTR szProcess)'],
  // AU3_ProcessSetPriority: [Return.Int, '(LPCWSTR szProcess, int nPriority)'],
  // AU3_ProcessWait: [Return.Int, '(LPCWSTR szProcess, int nTimeout = 0)'],
  // AU3_ProcessWaitClose: [Return.Int, '(LPCWSTR szProcess, int nTimeout = 0)'],
  // AU3_Run: [
  //   Return.Int,
  //   '(LPCWSTR szProgram, /*[in,defaultvalue("")]*/LPCWSTR szDir, int nShowFlag = SW_SHOWNORMAL)',
  // ],
  // AU3_RunWait: [
  //   Return.Int,
  //   '(LPCWSTR szProgram, /*[in,defaultvalue("")]*/LPCWSTR szDir, int nShowFlag = SW_SHOWNORMAL)',
  // ],
  // AU3_RunAs: [
  //   Return.Int,
  //   '(LPCWSTR szUser, LPCWSTR szDomain, LPCWSTR szPassword, int nLogonFlag, LPCWSTR szProgram, /*[in,defaultvalue("")]*/LPCWSTR szDir, int nShowFlag = SW_SHOWNORMAL)',
  // ],
  // AU3_RunAsWait: [
  //   Return.Int,
  //   '(LPCWSTR szUser, LPCWSTR szDomain, LPCWSTR szPassword, int nLogonFlag, LPCWSTR szProgram, /*[in,defaultvalue("")]*/LPCWSTR szDir, int nShowFlag = SW_SHOWNORMAL)',
  // ],
  // AU3_Send: [Return.Void, '(LPCWSTR szSendText, int nMode = 0)'],
  // AU3_Shutdown: [Return.Int, '(int nFlags)'],
  // AU3_Sleep: [Return.Void, '(int nMilliseconds)'],
  // AU3_StatusbarGetText: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, /*[in,defaultvalue(1)]*/int nPart, LPWSTR szStatusText, int nBufSize)',
  // ],
  // AU3_StatusbarGetTextByHandle: [
  //   Return.Int,
  //   '(HWND hWnd, /*[in,defaultvalue(1)]*/int nPart, LPWSTR szStatusText, int nBufSize)',
  // ],
  // AU3_ToolTip: [
  //   'void',
  //   '(LPCWSTR szTip, int nX = AU3_INTDEFAULT, int nY = AU3_INTDEFAULT)',
  // ],
  // AU3_WinActivate: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinActivateByHandle: [Return.Int, '(HWND hWnd)'],
  // AU3_WinActive: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinActiveByHandle: [Return.Int, '(HWND hWnd)'],
  // AU3_WinClose: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinCloseByHandle: [Return.Int, '(HWND hWnd)'],
  // AU3_WinExists: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinExistsByHandle: [Return.Int, '(HWND hWnd)'],
  // AU3_WinGetCaretPos: [Return.Int, '(LPPOINT lpPoint)'],
  // AU3_WinGetClassList: [
  //   'void',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinGetClassListByHandle: [
  //   'void',
  //   '(HWND hWnd, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinGetClientSize: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPRECT lpRect)',
  // ],
  // AU3_WinGetClientSizeByHandle: [Return.Int, '(HWND hWnd, LPRECT lpRect)'],
  // AU3_WinGetHandle: [
  //   'HWND',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinGetHandleAsText: [
  //   'void',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinGetPos: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPRECT lpRect)',
  // ],
  // AU3_WinGetPosByHandle: [Return.Int, '(HWND hWnd, LPRECT lpRect)'],
  // AU3_WinGetProcess: [
  //   'DWORD',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinGetProcessByHandle: ['DWORD', '(HWND hWnd)'],
  // AU3_WinGetState: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinGetStateByHandle: [Return.Int, '(HWND hWnd)'],
  // AU3_WinGetText: [
  //   'void',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinGetTextByHandle: [
  //   'void',
  //   '(HWND hWnd, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinGetTitle: [
  //   'void',
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinGetTitleByHandle: [
  //   'void',
  //   '(HWND hWnd, LPWSTR szRetText, int nBufSize)',
  // ],
  // AU3_WinKill: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText)',
  // ],
  // AU3_WinKillByHandle: [Return.Int, '(HWND hWnd)'],
  // AU3_WinMenuSelectItem: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPCWSTR szItem1, LPCWSTR szItem2, LPCWSTR szItem3, LPCWSTR szItem4, LPCWSTR szItem5, LPCWSTR szItem6, LPCWSTR szItem7, LPCWSTR szItem8)',
  // ],
  // AU3_WinMenuSelectItemByHandle: [
  //   Return.Int,
  //   '(HWND hWnd, LPCWSTR szItem1, LPCWSTR szItem2, LPCWSTR szItem3, LPCWSTR szItem4, LPCWSTR szItem5, LPCWSTR szItem6, LPCWSTR szItem7, LPCWSTR szItem8)',
  // ],
  // AU3_WinMinimizeAll: [Return.Void, []],
  // AU3_WinMinimizeAllUndo: [Return.Void, []],
  // AU3_WinMove: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nX, int nY, int nWidth = -1, int nHeight = -1)',
  // ],
  // AU3_WinMoveByHandle: [
  //   Return.Int,
  //   '(HWND hWnd, int nX, int nY, int nWidth = -1, int nHeight = -1)',
  // ],
  // AU3_WinSetOnTop: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nFlag)',
  // ],
  // AU3_WinSetOnTopByHandle: [Return.Int, '(HWND hWnd, int nFlag)'],
  // AU3_WinSetState: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nFlags)',
  // ],
  // AU3_WinSetStateByHandle: [Return.Int, '(HWND hWnd, int nFlags)'],
  // AU3_WinSetTitle: [
  //   Return.Int,
  //   '(LPCWSTR szTitle,/*[in,defaultvalue("")]*/ LPCWSTR szText, LPCWSTR szNewTitle)',
  // ],
  // AU3_WinSetTitleByHandle: [Return.Int, '(HWND hWnd, LPCWSTR szNewTitle)'],
  // AU3_WinSetTrans: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nTrans)',
  // ],
  // AU3_WinSetTransByHandle: [Return.Int, '(HWND hWnd, int nTrans)'],
  // AU3_WinWait: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nTimeout = 0)',
  // ],
  // AU3_WinWaitByHandle: [Return.Int, '(HWND hWnd, int nTimeout)'],
  // AU3_WinWaitActive: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nTimeout = 0)',
  // ],
  // AU3_WinWaitActiveByHandle: [Return.Int, '(HWND hWnd, int nTimeout)'],
  // AU3_WinWaitClose: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nTimeout = 0)',
  // ],
  // AU3_WinWaitCloseByHandle: [Return.Int, '(HWND hWnd, int nTimeout)'],
  // AU3_WinWaitNotActive: [
  //   Return.Int,
  //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, int nTimeout)',
  // ],
  // AU3_WinWaitNotActiveByHandle: [Return.Int, '(HWND hWnd, int nTimeout = 0)'],
}
