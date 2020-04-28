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
    static async minimizeAll() {
        return functions_1.winMinimizeAll();
    }
    static async minimizeAllUndo() {
        return functions_1.winMinimizeAllUndo();
    }
    async getControl(controlDescription) {
        const controlHwnd = await functions_1.controlGetHandle(this.hwnd, controlDescription);
        if (controlHwnd === null)
            return null;
        return control_1.Control.ofParentAndHwnd(this, controlHwnd);
    }
    async activate() {
        return functions_1.winActivateByHandle(this.hwnd);
    }
    async active() {
        return functions_1.winActiveByHandle(this.hwnd);
    }
    async close() {
        return functions_1.winCloseByHandle(this.hwnd);
    }
    async exists() {
        return functions_1.winExistsByHandle(this.hwnd);
    }
    async getState() {
        return functions_1.winGetStateByHandle(this.hwnd);
    }
    async getText() {
        return functions_1.winGetTextByHandle(this.hwnd);
    }
    async getTitle() {
        return functions_1.winGetTitleByHandle(this.hwnd);
    }
    async kill() {
        return functions_1.winKillByHandle(this.hwnd);
    }
    async selectMenuItem(item0, item1, item2, item3, item4, item5, item6, item7) {
        return functions_1.winMenuSelectItemByHandle(this.hwnd, item0, item1, item2, item3, item4, item5, item6, item7);
    }
    async waitActive(timeoutSecs = Infinity) {
        if (timeoutSecs === Infinity)
            timeoutSecs = 0;
        return functions_1.winWaitActiveByHandle(this.hwnd, timeoutSecs);
    }
    async waitClose(timeoutSecs = Infinity) {
        if (timeoutSecs === Infinity)
            timeoutSecs = 0;
        return functions_1.winWaitCloseByHandle(this.hwnd, timeoutSecs);
    }
}
exports.Window = Window;
