"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hwnd_1 = require("./hwnd");
exports.Hwnd = hwnd_1.Hwnd;
var point_1 = require("./point");
exports.Point = point_1.Point;
var rectangle_1 = require("./rectangle");
exports.Rectangle = rectangle_1.Rectangle;
var MouseButton;
(function (MouseButton) {
    MouseButton["Left"] = "left";
    MouseButton["Middle"] = "middle";
    MouseButton["Right"] = "right";
    MouseButton["Primary"] = "primary";
    MouseButton["Main"] = "main";
    MouseButton["Secondary"] = "secondary";
    MouseButton["Menu"] = "menu";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
var MouseScrollDirection;
(function (MouseScrollDirection) {
    MouseScrollDirection["Up"] = "up";
    MouseScrollDirection["Down"] = "down";
})(MouseScrollDirection = exports.MouseScrollDirection || (exports.MouseScrollDirection = {}));
var SendMode;
(function (SendMode) {
    SendMode[SendMode["Default"] = 0] = "Default";
    SendMode[SendMode["Raw"] = 1] = "Raw";
})(SendMode = exports.SendMode || (exports.SendMode = {}));
var Cursor;
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
})(Cursor = exports.Cursor || (exports.Cursor = {}));
