export { Hwnd } from './hwnd';
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
export var SendMode;
(function (SendMode) {
    SendMode[SendMode["Default"] = 0] = "Default";
    SendMode[SendMode["Raw"] = 1] = "Raw";
})(SendMode || (SendMode = {}));
