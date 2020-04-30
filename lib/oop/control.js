"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const functions_1 = require("../functions");
class Control {
    constructor(window, hwnd) {
        this.window = window;
        this.hwnd = hwnd;
    }
    static ofParentAndHwnd(window, hwnd) {
        return new Control(window, hwnd);
    }
    async setText(text, library) {
        return functions_1.controlSetTextByHandle(this.window.getHwnd(), this.hwnd, text, library);
    }
    async getText(textSize, library) {
        return functions_1.controlGetTextByHandle(this.window.getHwnd(), this.hwnd, textSize, library);
    }
    async focus(library) {
        return functions_1.controlFocusByHandle(this.window.getHwnd(), this.hwnd, library);
    }
    async click(button = types_1.MouseButton.Primary, count = 1, position, library) {
        const { x, y } = position ? position : {};
        return functions_1.controlClickByHandle(this.window.getHwnd(), this.hwnd, button, count, x, y, library);
    }
    async getPos(library) {
        return functions_1.controlGetPosByHandle(this.window.getHwnd(), this.hwnd, library);
    }
    async enable(library) {
        return functions_1.controlEnableByHandle(this.window.getHwnd(), this.hwnd, library);
    }
    async disable(library) {
        return functions_1.controlDisableByHandle(this.window.getHwnd(), this.hwnd, library);
    }
    async send(text, mode, library) {
        return functions_1.controlSendByHandle(this.window.getHwnd(), this.hwnd, text, mode, library);
    }
}
exports.Control = Control;
