"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const control_1 = require("./control");
const functions_1 = require("../functions");
function tick(millisecs) {
    return new Promise(resolve => {
        setTimeout(resolve, millisecs);
    });
}
class Window {
    constructor(hwnd) {
        this.hwnd = hwnd;
    }
    static ofHwnd(hwnd) {
        return new Window(hwnd);
    }
    static async ofSelector(windowDescription, windowText = '') {
        const hwnd = await functions_1.winGetHandle(windowDescription, windowText);
        if (hwnd === null)
            return null;
        return new Window(hwnd);
    }
    static async wait(windowDescription, windowText, timeoutMillisecs = Infinity) {
        const incrementMillisecs = 250;
        for (let i = 0; i < timeoutMillisecs; i += incrementMillisecs) {
            if (i > 0)
                await tick(incrementMillisecs);
            const window = Window.ofSelector(windowDescription, windowText);
            if (window !== null)
                return window;
        }
        return null;
    }
    getHwnd() {
        return this.hwnd;
    }
    static async minimizeAll(library) {
        return functions_1.winMinimizeAll(library);
    }
    static async minimizeAllUndo(library) {
        return functions_1.winMinimizeAllUndo(library);
    }
    async getControl(controlDescription, library) {
        const controlHwnd = await functions_1.controlGetHandle(this.hwnd, controlDescription, library);
        if (controlHwnd === null)
            return null;
        return control_1.Control.ofParentAndHwnd(this, controlHwnd);
    }
    async activate(library) {
        return functions_1.winActivateByHandle(this.hwnd, library);
    }
    async active(library) {
        return functions_1.winActiveByHandle(this.hwnd, library);
    }
    async close(library) {
        return functions_1.winCloseByHandle(this.hwnd, library);
    }
    async exists(library) {
        return functions_1.winExistsByHandle(this.hwnd, library);
    }
    async getState(library) {
        return functions_1.winGetStateByHandle(this.hwnd, library);
    }
    async getText(textSize, library) {
        return functions_1.winGetTextByHandle(this.hwnd, textSize, library);
    }
    async getTitle(titleSize, library) {
        return functions_1.winGetTitleByHandle(this.hwnd, titleSize, library);
    }
    async kill(library) {
        return functions_1.winKillByHandle(this.hwnd, library);
    }
    async selectMenuItem(item0, item1, item2, item3, item4, item5, item6, item7, library) {
        return functions_1.winMenuSelectItemByHandle(this.hwnd, item0, item1, item2, item3, item4, item5, item6, item7, library);
    }
    async waitActive(timeoutSecs = Infinity, library) {
        if (timeoutSecs === Infinity)
            timeoutSecs = 0;
        return functions_1.winWaitActiveByHandle(this.hwnd, timeoutSecs, library);
    }
    async waitClose(timeoutSecs = Infinity, library) {
        if (timeoutSecs === Infinity)
            timeoutSecs = 0;
        return functions_1.winWaitCloseByHandle(this.hwnd, timeoutSecs, library);
    }
}
exports.Window = Window;
