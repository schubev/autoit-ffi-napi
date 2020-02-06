/* eslint @typescript-eslint/camelcase: "off" */
export var Param;
(function (Param) {
    Param[Param["Int"] = 0] = "Int";
    Param[Param["InWstr"] = 1] = "InWstr";
    Param[Param["InWstrCommand"] = 2] = "InWstrCommand";
    Param[Param["InWstrCommandExtra"] = 3] = "InWstrCommandExtra";
    Param[Param["InWstrDescription"] = 4] = "InWstrDescription";
    Param[Param["InWstrMouseButton"] = 5] = "InWstrMouseButton";
    Param[Param["OutWstr"] = 6] = "OutWstr";
    Param[Param["OutWstrSize"] = 7] = "OutWstrSize";
    Param[Param["OutRectangle"] = 8] = "OutRectangle";
    Param[Param["Hwnd"] = 9] = "Hwnd";
    Param[Param["SendMode"] = 10] = "SendMode";
})(Param || (Param = {}));
export var Return;
(function (Return) {
    Return[Return["Void"] = 0] = "Void";
    Return[Return["Int"] = 1] = "Int";
    Return[Return["Hwnd"] = 2] = "Hwnd";
})(Return || (Return = {}));
export var SendMode;
(function (SendMode) {
    SendMode[SendMode["Default"] = 0] = "Default";
    SendMode[SendMode["Raw"] = 1] = "Raw";
})(SendMode || (SendMode = {}));
export var MouseButton;
(function (MouseButton) {
    MouseButton["Default"] = "";
    MouseButton["Left"] = "left";
    MouseButton["Middle"] = "middle";
    MouseButton["Right"] = "right";
    MouseButton["Primary"] = "primary";
    MouseButton["Main"] = "main";
    MouseButton["Secondary"] = "secondary";
    MouseButton["Menu"] = "menu";
})(MouseButton || (MouseButton = {}));
export const defaultInt = -0x7fffffff;
const windowSelection = [
    ['title', Param.InWstrDescription],
    ['text', Param.InWstr],
];
const controlSelection = [
    ...windowSelection,
    ['control', Param.InWstrDescription],
];
const windowByHwnd = [['window', Param.Hwnd]];
const controlByHwnd = [...windowByHwnd, ['control', Param.Hwnd]];
export const functions = {
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
            ...windowSelection,
            ['button', Param.InWstrMouseButton],
            ['numClicks', Param.Int],
            ['nX', Param.Int, -2147483647],
            ['nY', Param.Int, -2147483647],
        ],
    ],
    AU3_ControlClickByHandle: [
        Return.Int,
        [
            ...controlByHwnd,
            ['button', Param.InWstrMouseButton],
            ['numClicks', Param.Int],
            ['nX', Param.Int, -2147483647],
            ['nY', Param.Int, -2147483647],
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
};
