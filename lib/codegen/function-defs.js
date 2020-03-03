/* eslint @typescript-eslint/camelcase: "off" */
export var Param;
(function (Param) {
    Param["Int"] = "Int";
    Param["InWstr"] = "IntWstr";
    Param["InWstrCommand"] = "InWstrCommand";
    Param["InWstrCommandExtra"] = "InWstrCommandExtra";
    Param["InWstrDescription"] = "InWstrDescription";
    Param["InWstrMouseButton"] = "InWstrMouseButton";
    Param["OutWstr"] = "OutWstr";
    Param["OutWstrSize"] = "OutWstrSize";
    Param["OutRectangle"] = "OutRectangle";
    Param["Hwnd"] = "Hwnd";
    Param["SendMode"] = "SendMode";
})(Param || (Param = {}));
export var Return;
(function (Return) {
    Return["Void"] = "Void";
    Return["Int"] = "Int";
    Return["IntStatus"] = "IntStatus";
    Return["IntCursor"] = "IntCursor";
    Return["Hwnd"] = "Hwnd";
})(Return || (Return = {}));
export const defaultInt = -0x7fffffff;
const windowSelection = [
    { key: 'windowDescription', type: Param.InWstrDescription },
    { key: 'windowText', type: Param.InWstr },
];
const controlSelection = [
    ...windowSelection,
    { key: 'controlDescription', type: Param.InWstrDescription },
];
const windowByHwnd = [{ key: 'window', type: Param.Hwnd }];
const controlByHwnd = [
    ...windowByHwnd,
    { key: 'control', type: Param.Hwnd },
];
export const functions = {
    AU3_Init: { return: Return.Void, params: [], generate: true },
    AU3_error: { return: Return.Int, params: [], generate: true },
    AU3_AutoItSetOption: {
        return: Return.Int,
        params: [
            { key: 'option', type: Param.InWstr },
            { key: 'value', type: Param.Int },
        ],
        generate: false,
    },
    AU3_ClipGet: {
        return: Return.Void,
        params: [
            { key: 'clip', type: Param.OutWstr },
            { key: 'clipSize', type: Param.OutWstrSize },
        ],
        generate: true,
    },
    AU3_ClipPut: {
        return: Return.Void,
        params: [{ key: 'clip', type: Param.InWstr }],
        generate: true,
    },
    AU3_ControlClick: {
        return: Return.IntStatus,
        params: [
            ...controlSelection,
            { key: 'button', type: Param.InWstrMouseButton },
            { key: 'numClicks', type: Param.Int },
            { key: 'nX', type: Param.Int, default: -2147483647 },
            { key: 'nY', type: Param.Int, default: -2147483647 },
        ],
        generate: true,
    },
    AU3_ControlClickByHandle: {
        return: Return.Int,
        params: [
            ...controlByHwnd,
            { key: 'button', type: Param.InWstrMouseButton },
            { key: 'numClicks', type: Param.Int },
            { key: 'nX', type: Param.Int, default: -2147483647 },
            { key: 'nY', type: Param.Int, default: -2147483647 },
        ],
        generate: true,
    },
    AU3_ControlCommand: /* polymorphic return type */ {
        return: Return.Void,
        params: [
            ...controlSelection,
            { key: 'command', type: Param.InWstrCommand },
            { key: 'extra', type: Param.InWstrCommandExtra },
            { key: 'result', type: Param.OutWstr },
            { key: 'resultSize', type: Param.OutWstrSize },
        ],
        generate: false,
    },
    AU3_ControlCommandByHandle: /* polymorphic return type */ {
        return: Return.Void,
        params: [
            ...controlByHwnd,
            { key: 'command', type: Param.InWstrCommand },
            { key: 'extra', type: Param.InWstrCommandExtra },
            { key: 'result', type: Param.OutWstr },
            { key: 'resultSize', type: Param.OutWstrSize },
        ],
        generate: false,
    },
    AU3_ControlListView: {
        return: Return.Void,
        params: [
            ...controlSelection,
            { key: 'command', type: Param.InWstrCommand },
            { key: 'extra1', type: Param.InWstrCommandExtra },
            { key: 'extra2', type: Param.InWstrCommandExtra },
            { key: 'result', type: Param.OutWstr },
            { key: 'resultSize', type: Param.OutWstrSize },
        ],
        generate: false,
    },
    AU3_ControlListViewByHandle: {
        return: Return.Void,
        params: [
            ...controlByHwnd,
            { key: 'command', type: Param.InWstrCommand },
            { key: 'extra1', type: Param.InWstrCommandExtra },
            { key: 'extra2', type: Param.InWstrCommandExtra },
            { key: 'result', type: Param.OutWstr },
            { key: 'resultSize', type: Param.OutWstrSize },
        ],
        generate: false,
    },
    AU3_ControlDisable: {
        return: Return.Int,
        params: [...controlSelection],
        generate: true,
    },
    AU3_ControlDisableByHandle: {
        return: Return.Int,
        params: [...controlByHwnd],
        generate: true,
    },
    AU3_ControlEnable: {
        return: Return.Int,
        params: [...controlSelection],
        generate: true,
    },
    AU3_ControlEnableByHandle: {
        return: Return.Int,
        params: [...controlByHwnd],
        generate: true,
    },
    AU3_ControlFocus: {
        return: Return.Int,
        params: [...controlSelection],
        generate: true,
    },
    AU3_ControlFocusByHandle: {
        return: Return.Int,
        params: [...controlByHwnd],
        generate: true,
    },
    AU3_ControlGetFocus: {
        return: Return.Void,
        params: [
            ...windowSelection,
            { key: 'control', type: Param.OutWstr },
            { key: 'controlSize', type: Param.OutWstrSize },
        ],
        generate: true,
    },
    AU3_ControlGetFocusByHandle: {
        return: Return.Void,
        params: [
            { key: 'window', type: Param.Hwnd },
            { key: 'control', type: Param.OutWstr },
            { key: 'controlSize', type: Param.OutWstrSize },
        ],
        generate: true,
    },
    AU3_ControlGetHandle: {
        return: Return.Hwnd,
        params: [
            { key: 'window', type: Param.Hwnd },
            { key: 'control', type: Param.InWstrDescription },
        ],
        generate: true,
    },
    // AU3_ControlGetHandleAsText: [
    //   'void',
    //   '(LPCWSTR szTitle, /*[in,defaultvalue("")]*/LPCWSTR szText, LPCWSTR szControl, LPWSTR szRetText, int nBufSize)',
    // ],
    // AU3_ControlGetPos: {
    //   return: Return.Int,
    //   params: [
    //     ...controlSelection,
    //     { key: 'rectangle', type: Param.OutRectangle },
    //   ],
    //   generate: true,
    // },
    // AU3_ControlGetPosByHandle: {
    //   return: Return.Int,
    //   params: [...controlByHwnd, { key: 'rectangle', type: Param.OutRectangle }],
    //   generate: true,
    // },
    AU3_ControlGetText: {
        return: Return.Void,
        params: [
            ...controlSelection,
            { key: 'controlText', type: Param.OutWstr },
            { key: 'controlTextSize', type: Param.OutWstrSize },
        ],
        generate: true,
    },
    AU3_ControlGetTextByHandle: {
        return: Return.Void,
        params: [
            ...controlByHwnd,
            { key: 'controlText', type: Param.OutWstr },
            { key: 'controlTextSize', type: Param.OutWstrSize },
        ],
        generate: true,
    },
    AU3_ControlHide: {
        return: Return.Int,
        params: [...controlSelection],
        generate: true,
    },
    AU3_ControlHideByHandle: {
        return: Return.Int,
        params: [...controlByHwnd],
        generate: true,
    },
    AU3_ControlMove: {
        return: Return.Int,
        params: [
            ...controlSelection,
            { key: 'nX', type: Param.Int },
            { key: 'nY', type: Param.Int },
            { key: 'nWidth', type: Param.Int, default: -1 },
            { key: 'nHeight', type: Param.Int, default: -1 },
        ],
        generate: true,
    },
    AU3_ControlMoveByHandle: {
        return: Return.Int,
        params: [
            ...controlByHwnd,
            { key: 'nX', type: Param.Int },
            { key: 'nY', type: Param.Int },
            { key: 'nWidth', type: Param.Int, default: -1 },
            { key: 'nHeight', type: Param.Int, default: -1 },
        ],
        generate: true,
    },
    AU3_ControlSend: {
        return: Return.Int,
        params: [
            ...controlSelection,
            { key: 'text', type: Param.InWstr },
            { key: 'mode', type: Param.SendMode },
        ],
        generate: true,
    },
    AU3_ControlSendByHandle: {
        return: Return.Int,
        params: [
            ...controlByHwnd,
            { key: 'text', type: Param.InWstr },
            { key: 'mode', type: Param.SendMode },
        ],
        generate: true,
    },
    AU3_ControlSetText: {
        return: Return.Int,
        params: [...controlSelection, { key: 'text', type: Param.InWstr }],
        generate: true,
    },
    AU3_ControlSetTextByHandle: {
        return: Return.Int,
        params: [...controlByHwnd, { key: 'text', type: Param.InWstr }],
        generate: true,
    },
    AU3_ControlShow: {
        return: Return.Int,
        params: [...controlSelection],
        generate: true,
    },
    AU3_ControlShowByHandle: {
        return: Return.Int,
        params: [...controlByHwnd],
        generate: true,
    },
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
    AU3_IsAdmin: { return: Return.IntStatus, params: [], generate: true },
    AU3_MouseClick: {
        return: Return.IntStatus,
        params: [
            {
                key: 'button',
                type: Param.InWstrMouseButton,
                default: 'MouseButton.Left',
            },
            { key: 'x', type: Param.Int, default: defaultInt },
            { key: 'y', type: Param.Int, default: defaultInt },
            { key: 'clickCount', type: Param.Int, default: 1 },
            { key: 'speed', type: Param.Int, default: 10 },
        ],
        generate: true,
    },
    AU3_MouseClickDrag: {
        return: Return.IntStatus,
        params: [
            {
                key: 'button',
                type: Param.InWstrMouseButton,
            },
            { key: 'xStart', type: Param.Int },
            { key: 'yStart', type: Param.Int },
            { key: 'xEnd', type: Param.Int },
            { key: 'yEnd', type: Param.Int },
            { key: 'speed', type: Param.Int, default: 10 },
        ],
        generate: true,
    },
    AU3_MouseDown: {
        return: Return.Void,
        params: [
            {
                key: 'button',
                type: Param.InWstrMouseButton,
                default: 'MouseButton.Left',
            },
        ],
        generate: true,
    },
    AU3_MouseGetCursor: { return: Return.IntCursor, params: [], generate: true },
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
    AU3_WinActivate: {
        return: Return.Hwnd,
        params: [...windowSelection],
        generate: true,
    },
    // TODO: Verify the byhandle version returns an HWND
    AU3_WinActivateByHandle: {
        return: Return.Hwnd,
        params: [...windowByHwnd],
        generate: true,
    },
    AU3_WinActive: {
        return: Return.Hwnd,
        params: [...windowSelection],
        generate: true,
    },
    // TODO: Verify the byhandle version returns an HWND
    AU3_WinActiveByHandle: {
        return: Return.Hwnd,
        params: [...windowByHwnd],
        generate: true,
    },
    AU3_WinClose: {
        return: Return.IntStatus,
        params: [...windowSelection],
        generate: true,
    },
    AU3_WinCloseByHandle: {
        return: Return.IntStatus,
        params: [...windowByHwnd],
        generate: true,
    },
    AU3_WinExists: {
        return: Return.IntStatus,
        params: [...windowSelection],
        generate: true,
    },
    AU3_WinExistsByHandle: {
        return: Return.IntStatus,
        params: [...windowByHwnd],
        generate: true,
    },
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
    AU3_WinGetHandle: {
        return: Return.Hwnd,
        params: [...windowSelection],
        generate: true,
    },
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
    AU3_WinGetTitle: {
        return: Return.Void,
        params: [
            ...windowSelection,
            { key: 'title', type: Param.OutWstr },
            { key: 'titleSize', type: Param.OutWstrSize },
        ],
        generate: true,
    },
};
