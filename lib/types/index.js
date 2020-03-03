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
export var Cursor;
(function (Cursor) {
    Cursor[Cursor["Unknown"] = -1] = "Unknown";
    Cursor[Cursor["Hand"] = 0] = "Hand";
    Cursor[Cursor["AppStarting"] = 1] = "AppStarting";
    Cursor[Cursor["Arrow"] = 2] = "Arrow";
    Cursor[Cursor["Cross"] = 3] = "Cross";
    Cursor[Cursor["Help"] = 4] = "Help";
    Cursor[Cursor["IBeam"] = 5] = "IBeam";
    Cursor[Cursor["Icon"] = 6] = "Icon";
    Cursor[Cursor["No"] = 7] = "No";
    Cursor[Cursor["Size"] = 8] = "Size";
    Cursor[Cursor["SizeAll"] = 9] = "SizeAll";
    Cursor[Cursor["SizeNorthEastSouthWest"] = 10] = "SizeNorthEastSouthWest";
    Cursor[Cursor["SizeNorthSouth"] = 11] = "SizeNorthSouth";
    Cursor[Cursor["SizeNorthWestSouthEast"] = 12] = "SizeNorthWestSouthEast";
    Cursor[Cursor["SizeWestEath"] = 13] = "SizeWestEath";
    Cursor[Cursor["UpArrow"] = 14] = "UpArrow";
    Cursor[Cursor["Wait"] = 15] = "Wait";
})(Cursor || (Cursor = {}));
export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    static ofCorners(aX, aY, bX, bY) {
        return new Rectangle(aX, aY, bX - aX, bY - aY);
    }
}
