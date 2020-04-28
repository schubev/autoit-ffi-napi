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
    async setText(text) {
        return functions_1.controlSetTextByHandle(this.window.getHwnd(), this.hwnd, text);
    }
    async getText(textSize) {
        return functions_1.controlGetTextByHandle(this.window.getHwnd(), this.hwnd, textSize);
    }
    async focus() {
        return functions_1.controlFocusByHandle(this.window.getHwnd(), this.hwnd);
    }
    async click(button = types_1.MouseButton.Primary, count = 1, position) {
        const { x, y } = position ? position : {};
        return functions_1.controlClickByHandle(this.window.getHwnd(), this.hwnd, button, count, x, y);
    }
    async getPos() {
        return functions_1.controlGetPosByHandle(this.window.getHwnd(), this.hwnd);
    }
    async enable() {
        return functions_1.controlEnableByHandle(this.window.getHwnd(), this.hwnd);
    }
    async disable() {
        return functions_1.controlDisableByHandle(this.window.getHwnd(), this.hwnd);
    }
    async send(text, mode) {
        return functions_1.controlSendByHandle(this.window.getHwnd(), this.hwnd, text, mode);
    }
}
exports.Control = Control;
