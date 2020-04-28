"use strict";
/* eslint @typescript-eslint/camelcase: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
var Param;
(function (Param) {
    Param[Param["Int"] = 0] = "Int";
    Param[Param["IntBool"] = 1] = "IntBool";
    Param[Param["IntWindowState"] = 2] = "IntWindowState";
    Param[Param["IntSendMode"] = 3] = "IntSendMode";
    Param[Param["InWstr"] = 4] = "InWstr";
    Param[Param["InWstrCommand"] = 5] = "InWstrCommand";
    Param[Param["InWstrCommandExtra"] = 6] = "InWstrCommandExtra";
    Param[Param["InWstrDescription"] = 7] = "InWstrDescription";
    Param[Param["InWstrMouseButton"] = 8] = "InWstrMouseButton";
    Param[Param["InWstrMouseScrollDirection"] = 9] = "InWstrMouseScrollDirection";
    Param[Param["OutWstr"] = 10] = "OutWstr";
    Param[Param["OutWstrSize"] = 11] = "OutWstrSize";
    Param[Param["OutRectangle"] = 12] = "OutRectangle";
    Param[Param["Hwnd"] = 13] = "Hwnd";
})(Param = exports.Param || (exports.Param = {}));
var Return;
(function (Return) {
    Return[Return["Void"] = 0] = "Void";
    Return[Return["Int"] = 1] = "Int";
    Return[Return["IntDiscard"] = 2] = "IntDiscard";
    Return[Return["IntStatus"] = 3] = "IntStatus";
    Return[Return["IntCursor"] = 4] = "IntCursor";
    Return[Return["Hwnd"] = 5] = "Hwnd";
})(Return = exports.Return || (exports.Return = {}));
exports.defaultInt = -0x7fffffff;
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
function winFunctions(name, functionDef) {
    return {
        [name]: Object.assign(Object.assign({}, functionDef), { params: [...windowSelection, ...functionDef.params] }),
        [name + 'ByHandle']: Object.assign(Object.assign({}, functionDef), { params: [...windowByHwnd, ...functionDef.params] }),
    };
}
function controlFunctions(name, functionDef) {
    return {
        [name]: Object.assign(Object.assign({}, functionDef), { params: [...controlSelection, ...functionDef.params] }),
        [name + 'ByHandle']: Object.assign(Object.assign({}, functionDef), { params: [...controlByHwnd, ...functionDef.params] }),
    };
}
exports.functions = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ AU3_Init: { return: Return.Void, params: [], generate: true }, AU3_error: { return: Return.Int, params: [], generate: true }, AU3_AutoItSetOption: {
        return: Return.Int,
        params: [
            { key: 'option', type: Param.InWstr },
            { key: 'value', type: Param.Int },
        ],
        generate: false,
    }, AU3_ClipGet: {
        return: Return.Void,
        params: [
            { key: 'clip', type: Param.OutWstr },
            { key: 'clipSize', type: Param.OutWstrSize },
        ],
        generate: true,
    }, AU3_ClipPut: {
        return: Return.Void,
        params: [{ key: 'clip', type: Param.InWstr }],
        generate: true,
    } }, controlFunctions('AU3_ControlClick', {
    return: Return.IntStatus,
    params: [
        { key: 'button', type: Param.InWstrMouseButton },
        { key: 'numClicks', type: Param.Int },
        { key: 'nX', type: Param.Int, default: -2147483647 },
        { key: 'nY', type: Param.Int, default: -2147483647 },
    ],
    generate: true,
})), controlFunctions('AU3_ControlCommand', {
    return: Return.Void /* polymorphic return type */,
    params: [
        { key: 'command', type: Param.InWstrCommand },
        { key: 'extra', type: Param.InWstrCommandExtra },
        { key: 'result', type: Param.OutWstr },
        { key: 'resultSize', type: Param.OutWstrSize },
    ],
    generate: false,
})), controlFunctions('AU3_ControlListView', {
    return: Return.Void,
    params: [
        { key: 'command', type: Param.InWstrCommand },
        { key: 'extra1', type: Param.InWstrCommandExtra },
        { key: 'extra2', type: Param.InWstrCommandExtra },
        { key: 'result', type: Param.OutWstr },
        { key: 'resultSize', type: Param.OutWstrSize },
    ],
    generate: false,
})), controlFunctions('AU3_ControlDisable', {
    return: Return.Int,
    params: [],
    generate: true,
})), controlFunctions('AU3_ControlEnable', {
    return: Return.Int,
    params: [],
    generate: true,
})), controlFunctions('AU3_ControlFocus', {
    return: Return.Int,
    params: [],
    generate: true,
})), winFunctions('AU3_ControlGetFocus', {
    return: Return.Void,
    params: [
        { key: 'control', type: Param.OutWstr },
        { key: 'controlSize', type: Param.OutWstrSize },
    ],
    generate: true,
})), { AU3_ControlGetHandle: {
        return: Return.Hwnd,
        params: [
            ...windowByHwnd,
            { key: 'control', type: Param.InWstrDescription },
        ],
        generate: true,
    } }), controlFunctions('AU3_ControlGetPos', {
    return: Return.Int,
    params: [{ key: 'rectangle', type: Param.OutRectangle }],
    generate: true,
})), controlFunctions('AU3_ControlGetText', {
    return: Return.Void,
    params: [
        { key: 'controlText', type: Param.OutWstr },
        { key: 'controlTextSize', type: Param.OutWstrSize },
    ],
    generate: true,
})), controlFunctions('AU3_ControlHide', {
    return: Return.Int,
    params: [],
    generate: true,
})), controlFunctions('AU3_ControlMove', {
    return: Return.Int,
    params: [
        { key: 'nX', type: Param.Int },
        { key: 'nY', type: Param.Int },
        { key: 'nWidth', type: Param.Int, default: -1 },
        { key: 'nHeight', type: Param.Int, default: -1 },
    ],
    generate: true,
})), controlFunctions('AU3_ControlSend', {
    return: Return.Int,
    params: [
        { key: 'text', type: Param.InWstr },
        { key: 'mode', type: Param.IntSendMode, default: 'SendMode.Default' },
    ],
    generate: true,
})), controlFunctions('AU3_ControlSetText', {
    return: Return.Int,
    params: [{ key: 'text', type: Param.InWstr }],
    generate: true,
})), controlFunctions('AU3_ControlShow', {
    return: Return.Int,
    params: [],
    generate: true,
})), { 
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
    AU3_IsAdmin: { return: Return.IntStatus, params: [], generate: true }, AU3_MouseClick: {
        return: Return.IntStatus,
        params: [
            {
                key: 'button',
                type: Param.InWstrMouseButton,
                default: 'MouseButton.Primary',
            },
            { key: 'x', type: Param.Int, default: exports.defaultInt },
            { key: 'y', type: Param.Int, default: exports.defaultInt },
            { key: 'clickCount', type: Param.Int, default: 1 },
            { key: 'speed', type: Param.Int, default: 10 },
        ],
        generate: true,
    }, AU3_MouseClickDrag: {
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
    }, AU3_MouseDown: {
        return: Return.Void,
        params: [
            {
                key: 'button',
                type: Param.InWstrMouseButton,
                default: 'MouseButton.Primary',
            },
        ],
        generate: true,
    }, AU3_MouseGetCursor: { return: Return.IntCursor, params: [], generate: true }, 
    // AU3_MouseGetPos: [Return.Void, '(LPPOINT lpPoint)'],
    AU3_MouseMove: {
        return: Return.IntDiscard,
        params: [
            { key: 'x', type: Param.Int },
            { key: 'y', type: Param.Int },
            { key: 'speed', type: Param.Int, default: 10 },
        ],
        generate: true,
    }, AU3_MouseUp: {
        return: Return.Void,
        params: [
            {
                key: 'button',
                type: Param.InWstrMouseButton,
                default: 'MouseButton.Primary',
            },
        ],
        generate: true,
    }, AU3_MouseWheel: {
        return: Return.Void,
        params: [
            {
                key: 'direction',
                type: Param.InWstrMouseScrollDirection,
            },
            {
                key: 'increments',
                type: Param.Int,
                default: 1,
            },
        ],
        generate: true,
    }, 
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
    AU3_Send: {
        return: Return.Void,
        params: [
            { key: 'text', type: Param.InWstr },
            { key: 'mode', type: Param.IntSendMode, default: 'SendMode.Default' },
        ],
        generate: true,
    } }), winFunctions('AU3_WinActivate', {
    return: Return.IntStatus,
    params: [],
    generate: true,
})), winFunctions('AU3_WinActive', {
    return: Return.IntStatus,
    params: [],
    generate: true,
})), winFunctions('AU3_WinClose', {
    return: Return.IntStatus,
    params: [],
    generate: true,
})), winFunctions('AU3_WinExists', {
    return: Return.IntStatus,
    params: [],
    generate: true,
})), winFunctions('AU3_WinGetClientSize', {
    return: Return.Int,
    params: [{ key: 'rectangle', type: Param.OutRectangle }],
    generate: true,
})), { AU3_WinGetHandle: {
        return: Return.Hwnd,
        params: [...windowSelection],
        generate: true,
    } }), winFunctions('AU3_WinGetPos', {
    return: Return.Int,
    params: [{ key: 'rectangle', type: Param.OutRectangle }],
    generate: true,
})), winFunctions('AU3_WinGetTitle', {
    return: Return.Void,
    params: [
        { key: 'title', type: Param.OutWstr },
        { key: 'titleSize', type: Param.OutWstrSize },
    ],
    generate: true,
})), winFunctions('AU3_WinKill', {
    return: Return.IntStatus,
    params: [],
    generate: true,
})), winFunctions('AU3_WinMenuSelectItem', {
    return: Return.Int,
    params: [
        { key: 'item0', type: Param.InWstr, default: "''" },
        { key: 'item1', type: Param.InWstr, default: "''" },
        { key: 'item2', type: Param.InWstr, default: "''" },
        { key: 'item3', type: Param.InWstr, default: "''" },
        { key: 'item4', type: Param.InWstr, default: "''" },
        { key: 'item5', type: Param.InWstr, default: "''" },
        { key: 'item6', type: Param.InWstr, default: "''" },
        { key: 'item7', type: Param.InWstr, default: "''" },
    ],
    generate: true,
})), { AU3_WinMinimizeAll: {
        return: Return.Void,
        params: [],
        generate: true,
    }, AU3_WinMinimizeAllUndo: {
        return: Return.Void,
        params: [],
        generate: true,
    } }), winFunctions('AU3_WinMove', {
    return: Return.IntStatus,
    params: [
        { key: 'x', type: Param.Int },
        { key: 'y', type: Param.Int },
        { key: 'width', type: Param.Int, default: -1 },
        { key: 'height', type: Param.Int, default: -1 },
    ],
    generate: true,
})), winFunctions('AU3_WinSetOnTop', {
    return: Return.IntStatus,
    params: [{ key: 'onTop', type: Param.IntBool, default: 'true' }],
    generate: true,
})), winFunctions('AU3_WinSetState', {
    return: Return.IntStatus,
    params: [{ key: 'state', type: Param.IntWindowState }],
    generate: true,
})), winFunctions('AU3_WinSetTitle', {
    return: Return.IntStatus,
    params: [{ key: 'title', type: Param.InWstr }],
    generate: true,
})), winFunctions('AU3_WinSetTrans', {
    return: Return.IntStatus,
    params: [{ key: 'transparency', type: Param.Int }],
    generate: true,
})), winFunctions('AU3_WinWait', {
    return: Return.IntStatus,
    params: [{ key: 'timeoutSeconds', type: Param.Int, default: 0 }],
    generate: true,
})), winFunctions('AU3_WinWaitActive', {
    return: Return.IntStatus,
    params: [{ key: 'timeoutSeconds', type: Param.Int, default: 0 }],
    generate: true,
})), winFunctions('AU3_WinWaitClose', {
    return: Return.IntStatus,
    params: [{ key: 'timeoutSeconds', type: Param.Int, default: 0 }],
    generate: true,
})), winFunctions('AU3_WinWaitNotActive', {
    return: Return.IntStatus,
    params: [{ key: 'timeoutSeconds', type: Param.Int, default: 0 }],
    generate: true,
}));
