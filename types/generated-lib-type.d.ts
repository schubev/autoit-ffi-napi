/// <reference types="node" />
export interface AutoitLib {
    AU3_Init: {
        async(callback: (error: any, result: void) => void): void;
    };
    AU3_error: {
        async(callback: (error: any, result: number) => void): void;
    };
    AU3_AutoItSetOption: {
        async(option: Buffer, value: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ClipGet: {
        async(clip: Buffer, clipSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ClipPut: {
        async(clip: Buffer, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlClick: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, button: Buffer, numClicks: number, nX: number, nY: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlClickByHandle: {
        async(window: number, control: number, button: Buffer, numClicks: number, nX: number, nY: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlCommand: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, command: Buffer, extra: Buffer, result: Buffer, resultSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlCommandByHandle: {
        async(window: number, control: number, command: Buffer, extra: Buffer, result: Buffer, resultSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlListView: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, command: Buffer, extra1: Buffer, extra2: Buffer, result: Buffer, resultSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlListViewByHandle: {
        async(window: number, control: number, command: Buffer, extra1: Buffer, extra2: Buffer, result: Buffer, resultSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlDisable: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlDisableByHandle: {
        async(window: number, control: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlEnable: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlEnableByHandle: {
        async(window: number, control: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlFocus: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlFocusByHandle: {
        async(window: number, control: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlGetFocus: {
        async(windowDescription: Buffer, windowText: Buffer, control: Buffer, controlSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlGetFocusByHandle: {
        async(window: number, control: Buffer, controlSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlGetHandle: {
        async(window: number, control: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlGetPos: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, rectangle: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlGetPosByHandle: {
        async(window: number, control: number, rectangle: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlGetText: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, controlText: Buffer, controlTextSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlGetTextByHandle: {
        async(window: number, control: number, controlText: Buffer, controlTextSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_ControlHide: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlHideByHandle: {
        async(window: number, control: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlMove: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, nX: number, nY: number, nWidth: number, nHeight: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlMoveByHandle: {
        async(window: number, control: number, nX: number, nY: number, nWidth: number, nHeight: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlSend: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, text: Buffer, mode: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlSendByHandle: {
        async(window: number, control: number, text: Buffer, mode: number, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlSetText: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, text: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlSetTextByHandle: {
        async(window: number, control: number, text: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlShow: {
        async(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_ControlShowByHandle: {
        async(window: number, control: number, callback: (error: any, result: number) => void): void;
    };
    AU3_IsAdmin: {
        async(callback: (error: any, result: number) => void): void;
    };
    AU3_MouseClick: {
        async(button: Buffer, x: number, y: number, clickCount: number, speed: number, callback: (error: any, result: number) => void): void;
    };
    AU3_MouseClickDrag: {
        async(button: Buffer, xStart: number, yStart: number, xEnd: number, yEnd: number, speed: number, callback: (error: any, result: number) => void): void;
    };
    AU3_MouseDown: {
        async(button: Buffer, callback: (error: any, result: void) => void): void;
    };
    AU3_MouseGetCursor: {
        async(callback: (error: any, result: number) => void): void;
    };
    AU3_MouseMove: {
        async(x: number, y: number, speed: number, callback: (error: any, result: number) => void): void;
    };
    AU3_Send: {
        async(text: Buffer, mode: number, callback: (error: any, result: void) => void): void;
    };
    AU3_WinActivate: {
        async(windowDescription: Buffer, windowText: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinActivateByHandle: {
        async(window: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinActive: {
        async(windowDescription: Buffer, windowText: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinActiveByHandle: {
        async(window: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinClose: {
        async(windowDescription: Buffer, windowText: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinCloseByHandle: {
        async(window: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinExists: {
        async(windowDescription: Buffer, windowText: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinExistsByHandle: {
        async(window: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinGetClientSize: {
        async(windowDescription: Buffer, windowText: Buffer, rectangle: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinGetClientSizeByHandle: {
        async(window: number, rectangle: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinGetHandle: {
        async(windowDescription: Buffer, windowText: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinGetPos: {
        async(windowDescription: Buffer, windowText: Buffer, rectangle: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinGetPosByHandle: {
        async(window: number, rectangle: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinGetTitle: {
        async(windowDescription: Buffer, windowText: Buffer, title: Buffer, titleSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_WinGetTitleByHandle: {
        async(window: number, title: Buffer, titleSize: number, callback: (error: any, result: void) => void): void;
    };
    AU3_WinMenuSelectItem: {
        async(windowDescription: Buffer, windowText: Buffer, item0: Buffer, item1: Buffer, item2: Buffer, item3: Buffer, item4: Buffer, item5: Buffer, item6: Buffer, item7: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinMenuSelectItemByHandle: {
        async(window: number, item0: Buffer, item1: Buffer, item2: Buffer, item3: Buffer, item4: Buffer, item5: Buffer, item6: Buffer, item7: Buffer, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWait: {
        async(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitByHandle: {
        async(window: number, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitActive: {
        async(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitActiveByHandle: {
        async(window: number, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitClose: {
        async(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitCloseByHandle: {
        async(window: number, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitNotActive: {
        async(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
    AU3_WinWaitNotActiveByHandle: {
        async(window: number, timeoutSeconds: number, callback: (error: any, result: number) => void): void;
    };
}
export interface PromisifiedAutoitLib {
    AU3_Init(): Promise<void>;
    AU3_error(): Promise<number>;
    AU3_AutoItSetOption(option: Buffer, value: number): Promise<number>;
    AU3_ClipGet(clip: Buffer, clipSize: number): Promise<void>;
    AU3_ClipPut(clip: Buffer): Promise<void>;
    AU3_ControlClick(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, button: Buffer, numClicks: number, nX: number, nY: number): Promise<number>;
    AU3_ControlClickByHandle(window: number, control: number, button: Buffer, numClicks: number, nX: number, nY: number): Promise<number>;
    AU3_ControlCommand(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, command: Buffer, extra: Buffer, result: Buffer, resultSize: number): Promise<void>;
    AU3_ControlCommandByHandle(window: number, control: number, command: Buffer, extra: Buffer, result: Buffer, resultSize: number): Promise<void>;
    AU3_ControlListView(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, command: Buffer, extra1: Buffer, extra2: Buffer, result: Buffer, resultSize: number): Promise<void>;
    AU3_ControlListViewByHandle(window: number, control: number, command: Buffer, extra1: Buffer, extra2: Buffer, result: Buffer, resultSize: number): Promise<void>;
    AU3_ControlDisable(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer): Promise<number>;
    AU3_ControlDisableByHandle(window: number, control: number): Promise<number>;
    AU3_ControlEnable(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer): Promise<number>;
    AU3_ControlEnableByHandle(window: number, control: number): Promise<number>;
    AU3_ControlFocus(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer): Promise<number>;
    AU3_ControlFocusByHandle(window: number, control: number): Promise<number>;
    AU3_ControlGetFocus(windowDescription: Buffer, windowText: Buffer, control: Buffer, controlSize: number): Promise<void>;
    AU3_ControlGetFocusByHandle(window: number, control: Buffer, controlSize: number): Promise<void>;
    AU3_ControlGetHandle(window: number, control: Buffer): Promise<number>;
    AU3_ControlGetPos(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, rectangle: Buffer): Promise<number>;
    AU3_ControlGetPosByHandle(window: number, control: number, rectangle: Buffer): Promise<number>;
    AU3_ControlGetText(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, controlText: Buffer, controlTextSize: number): Promise<void>;
    AU3_ControlGetTextByHandle(window: number, control: number, controlText: Buffer, controlTextSize: number): Promise<void>;
    AU3_ControlHide(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer): Promise<number>;
    AU3_ControlHideByHandle(window: number, control: number): Promise<number>;
    AU3_ControlMove(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, nX: number, nY: number, nWidth: number, nHeight: number): Promise<number>;
    AU3_ControlMoveByHandle(window: number, control: number, nX: number, nY: number, nWidth: number, nHeight: number): Promise<number>;
    AU3_ControlSend(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, text: Buffer, mode: number): Promise<number>;
    AU3_ControlSendByHandle(window: number, control: number, text: Buffer, mode: number): Promise<number>;
    AU3_ControlSetText(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer, text: Buffer): Promise<number>;
    AU3_ControlSetTextByHandle(window: number, control: number, text: Buffer): Promise<number>;
    AU3_ControlShow(windowDescription: Buffer, windowText: Buffer, controlDescription: Buffer): Promise<number>;
    AU3_ControlShowByHandle(window: number, control: number): Promise<number>;
    AU3_IsAdmin(): Promise<number>;
    AU3_MouseClick(button: Buffer, x: number, y: number, clickCount: number, speed: number): Promise<number>;
    AU3_MouseClickDrag(button: Buffer, xStart: number, yStart: number, xEnd: number, yEnd: number, speed: number): Promise<number>;
    AU3_MouseDown(button: Buffer): Promise<void>;
    AU3_MouseGetCursor(): Promise<number>;
    AU3_MouseMove(x: number, y: number, speed: number): Promise<number>;
    AU3_Send(text: Buffer, mode: number): Promise<void>;
    AU3_WinActivate(windowDescription: Buffer, windowText: Buffer): Promise<number>;
    AU3_WinActivateByHandle(window: number): Promise<number>;
    AU3_WinActive(windowDescription: Buffer, windowText: Buffer): Promise<number>;
    AU3_WinActiveByHandle(window: number): Promise<number>;
    AU3_WinClose(windowDescription: Buffer, windowText: Buffer): Promise<number>;
    AU3_WinCloseByHandle(window: number): Promise<number>;
    AU3_WinExists(windowDescription: Buffer, windowText: Buffer): Promise<number>;
    AU3_WinExistsByHandle(window: number): Promise<number>;
    AU3_WinGetClientSize(windowDescription: Buffer, windowText: Buffer, rectangle: Buffer): Promise<number>;
    AU3_WinGetClientSizeByHandle(window: number, rectangle: Buffer): Promise<number>;
    AU3_WinGetHandle(windowDescription: Buffer, windowText: Buffer): Promise<number>;
    AU3_WinGetPos(windowDescription: Buffer, windowText: Buffer, rectangle: Buffer): Promise<number>;
    AU3_WinGetPosByHandle(window: number, rectangle: Buffer): Promise<number>;
    AU3_WinGetTitle(windowDescription: Buffer, windowText: Buffer, title: Buffer, titleSize: number): Promise<void>;
    AU3_WinGetTitleByHandle(window: number, title: Buffer, titleSize: number): Promise<void>;
    AU3_WinMenuSelectItem(windowDescription: Buffer, windowText: Buffer, item0: Buffer, item1: Buffer, item2: Buffer, item3: Buffer, item4: Buffer, item5: Buffer, item6: Buffer, item7: Buffer): Promise<number>;
    AU3_WinMenuSelectItemByHandle(window: number, item0: Buffer, item1: Buffer, item2: Buffer, item3: Buffer, item4: Buffer, item5: Buffer, item6: Buffer, item7: Buffer): Promise<number>;
    AU3_WinWait(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitByHandle(window: number, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitActive(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitActiveByHandle(window: number, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitClose(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitCloseByHandle(window: number, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitNotActive(windowDescription: Buffer, windowText: Buffer, timeoutSeconds: number): Promise<number>;
    AU3_WinWaitNotActiveByHandle(window: number, timeoutSeconds: number): Promise<number>;
}