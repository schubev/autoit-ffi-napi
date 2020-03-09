"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
class Window {
    constructor(hwnd) {
        this.hwnd = hwnd;
    }
    static async get(window) {
        const hwnd = await functions_1.winGetHandle(window, '');
        return hwnd != null ? new Window(hwnd) : null;
    }
}
