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
var SetWindowState;
(function (SetWindowState) {
    SetWindowState[SetWindowState["Hide"] = 0] = "Hide";
    SetWindowState[SetWindowState["Show"] = 5] = "Show";
    SetWindowState[SetWindowState["Maximize"] = 3] = "Maximize";
    SetWindowState[SetWindowState["Minimize"] = 6] = "Minimize";
    SetWindowState[SetWindowState["Restore"] = 9] = "Restore";
})(SetWindowState = exports.SetWindowState || (exports.SetWindowState = {}));
var WindowState;
(function (WindowState) {
    WindowState[WindowState["Exists"] = 1] = "Exists";
    WindowState[WindowState["Visible"] = 2] = "Visible";
    WindowState[WindowState["Enabled"] = 4] = "Enabled";
    WindowState[WindowState["Active"] = 8] = "Active";
    WindowState[WindowState["Minimized"] = 16] = "Minimized";
    WindowState[WindowState["Maximized"] = 32] = "Maximized";
})(WindowState = exports.WindowState || (exports.WindowState = {}));
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
