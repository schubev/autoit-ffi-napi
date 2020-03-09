"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hwnd {
    constructor(hwnd) {
        this.hwnd = hwnd;
    }
    static ofNumber(hwnd) {
        return new Hwnd(hwnd);
    }
    toNumber() {
        return this.hwnd;
    }
}
exports.Hwnd = Hwnd;
