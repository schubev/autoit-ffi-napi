"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoitOptionsList = [
    'CaretCoordMode',
    'ExpandEnvStrings',
    'ExpandVarStrings',
    'GuiCloseOnEsc',
    'GuiDataSeparatorChar',
    'GuiOnEventMode',
    'GuiResizeMode',
    'GuiEventOptions',
    'MouseClickDelay',
    'MouseClickDownDelay',
    'MouseClickDragDelay',
    'MouseCoordMode',
    'MustDeclareVars',
    'PixelCoordMode',
    'SendAttachMode',
    'SendCapslockMode',
    'SendKeyDelay',
    'SendKeyDownDelay',
    'TcpTimeout',
    'TrayAutoPause',
    'TrayIconDebug',
    'TrayIconHide',
    'TrayMenuMode',
    'TrayOnEventMode',
    'WinDetectHiddenText',
    'WinSearchChildren',
    'WinTextMatchMode',
    'WinTitleMatchMode',
    'WinWaitDelay',
];
var CaretCoordMode;
(function (CaretCoordMode) {
    CaretCoordMode[CaretCoordMode["Window"] = 0] = "Window";
    CaretCoordMode[CaretCoordMode["Screen"] = 1] = "Screen";
    CaretCoordMode[CaretCoordMode["Client"] = 2] = "Client";
})(CaretCoordMode = exports.CaretCoordMode || (exports.CaretCoordMode = {}));
var ExpandEnvStrings;
(function (ExpandEnvStrings) {
    ExpandEnvStrings[ExpandEnvStrings["Disable"] = 0] = "Disable";
    ExpandEnvStrings[ExpandEnvStrings["Enable"] = 1] = "Enable";
})(ExpandEnvStrings = exports.ExpandEnvStrings || (exports.ExpandEnvStrings = {}));
var ExpandVarStrings;
(function (ExpandVarStrings) {
    ExpandVarStrings[ExpandVarStrings["Disable"] = 0] = "Disable";
    ExpandVarStrings[ExpandVarStrings["Enable"] = 1] = "Enable";
})(ExpandVarStrings = exports.ExpandVarStrings || (exports.ExpandVarStrings = {}));
var GuiCloseOnEsc;
(function (GuiCloseOnEsc) {
    GuiCloseOnEsc[GuiCloseOnEsc["Disable"] = 0] = "Disable";
    GuiCloseOnEsc[GuiCloseOnEsc["Enable"] = 1] = "Enable";
})(GuiCloseOnEsc = exports.GuiCloseOnEsc || (exports.GuiCloseOnEsc = {}));
var GuiCoordMode;
(function (GuiCoordMode) {
    GuiCoordMode[GuiCoordMode["LastControl"] = 0] = "LastControl";
    GuiCoordMode[GuiCoordMode["Window"] = 1] = "Window";
    GuiCoordMode[GuiCoordMode["Cell"] = 2] = "Cell";
})(GuiCoordMode = exports.GuiCoordMode || (exports.GuiCoordMode = {}));
var GuiOnEventMode;
(function (GuiOnEventMode) {
    GuiOnEventMode[GuiOnEventMode["Disable"] = 0] = "Disable";
    GuiOnEventMode[GuiOnEventMode["Enable"] = 1] = "Enable";
})(GuiOnEventMode = exports.GuiOnEventMode || (exports.GuiOnEventMode = {}));
var GuiResizeMode;
(function (GuiResizeMode) {
    GuiResizeMode[GuiResizeMode["DockAuto"] = 1] = "DockAuto";
    GuiResizeMode[GuiResizeMode["DockLeft"] = 2] = "DockLeft";
    GuiResizeMode[GuiResizeMode["DockRight"] = 4] = "DockRight";
    GuiResizeMode[GuiResizeMode["DockHorizontalCenter"] = 8] = "DockHorizontalCenter";
    GuiResizeMode[GuiResizeMode["DockTop"] = 32] = "DockTop";
    GuiResizeMode[GuiResizeMode["DockBottom"] = 64] = "DockBottom";
    GuiResizeMode[GuiResizeMode["DockVerticalCenter"] = 128] = "DockVerticalCenter";
    GuiResizeMode[GuiResizeMode["DockWidth"] = 256] = "DockWidth";
    GuiResizeMode[GuiResizeMode["DockHeight"] = 512] = "DockHeight";
    GuiResizeMode[GuiResizeMode["DockSize"] = 768] = "DockSize";
    GuiResizeMode[GuiResizeMode["DockMenuBar"] = 544] = "DockMenuBar";
    GuiResizeMode[GuiResizeMode["DockStateBar"] = 576] = "DockStateBar";
    GuiResizeMode[GuiResizeMode["DockAll"] = 802] = "DockAll";
    GuiResizeMode[GuiResizeMode["DockBorders"] = 102] = "DockBorders";
})(GuiResizeMode = exports.GuiResizeMode || (exports.GuiResizeMode = {}));
var GuiEventOptions;
(function (GuiEventOptions) {
    GuiEventOptions[GuiEventOptions["Default"] = 0] = "Default";
    GuiEventOptions[GuiEventOptions["Suppress"] = 1] = "Suppress";
})(GuiEventOptions = exports.GuiEventOptions || (exports.GuiEventOptions = {}));
var MouseCoordMode;
(function (MouseCoordMode) {
    MouseCoordMode[MouseCoordMode["Window"] = 0] = "Window";
    MouseCoordMode[MouseCoordMode["Screen"] = 1] = "Screen";
    MouseCoordMode[MouseCoordMode["Client"] = 2] = "Client";
})(MouseCoordMode = exports.MouseCoordMode || (exports.MouseCoordMode = {}));
var MustDeclareVars;
(function (MustDeclareVars) {
    MustDeclareVars[MustDeclareVars["Disable"] = 0] = "Disable";
    MustDeclareVars[MustDeclareVars["Enable"] = 1] = "Enable";
})(MustDeclareVars = exports.MustDeclareVars || (exports.MustDeclareVars = {}));
var PixelCoordMode;
(function (PixelCoordMode) {
    PixelCoordMode[PixelCoordMode["Window"] = 0] = "Window";
    PixelCoordMode[PixelCoordMode["Screen"] = 1] = "Screen";
    PixelCoordMode[PixelCoordMode["Client"] = 2] = "Client";
})(PixelCoordMode = exports.PixelCoordMode || (exports.PixelCoordMode = {}));
var SendAttachMode;
(function (SendAttachMode) {
    SendAttachMode[SendAttachMode["Disable"] = 0] = "Disable";
    SendAttachMode[SendAttachMode["Enable"] = 1] = "Enable";
})(SendAttachMode = exports.SendAttachMode || (exports.SendAttachMode = {}));
var SendCapslockMode;
(function (SendCapslockMode) {
    SendCapslockMode[SendCapslockMode["NoRestore"] = 0] = "NoRestore";
    SendCapslockMode[SendCapslockMode["Store"] = 1] = "Store";
})(SendCapslockMode = exports.SendCapslockMode || (exports.SendCapslockMode = {}));
var TrayAutoPause;
(function (TrayAutoPause) {
    TrayAutoPause[TrayAutoPause["Disable"] = 0] = "Disable";
    TrayAutoPause[TrayAutoPause["Enable"] = 1] = "Enable";
})(TrayAutoPause = exports.TrayAutoPause || (exports.TrayAutoPause = {}));
var TrayIconDebug;
(function (TrayIconDebug) {
    TrayIconDebug[TrayIconDebug["Disable"] = 0] = "Disable";
    TrayIconDebug[TrayIconDebug["Enable"] = 1] = "Enable";
})(TrayIconDebug = exports.TrayIconDebug || (exports.TrayIconDebug = {}));
var TrayIconHide;
(function (TrayIconHide) {
    TrayIconHide[TrayIconHide["Show"] = 0] = "Show";
    TrayIconHide[TrayIconHide["Hide"] = 1] = "Hide";
})(TrayIconHide = exports.TrayIconHide || (exports.TrayIconHide = {}));
var TrayMenuMode;
(function (TrayMenuMode) {
    TrayMenuMode[TrayMenuMode["DefaultMenu"] = 0] = "DefaultMenu";
    TrayMenuMode[TrayMenuMode["NoDefaultMenu"] = 1] = "NoDefaultMenu";
    TrayMenuMode[TrayMenuMode["NoAutoCheck"] = 2] = "NoAutoCheck";
    TrayMenuMode[TrayMenuMode["NoTrayDefaultOnDoubleClick"] = 4] = "NoTrayDefaultOnDoubleClick";
    TrayMenuMode[TrayMenuMode["NoAutoCheckRadio"] = 8] = "NoAutoCheckRadio";
})(TrayMenuMode = exports.TrayMenuMode || (exports.TrayMenuMode = {}));
var TrayOnEventMode;
(function (TrayOnEventMode) {
    TrayOnEventMode[TrayOnEventMode["Disable"] = 0] = "Disable";
    TrayOnEventMode[TrayOnEventMode["Enable"] = 1] = "Enable";
})(TrayOnEventMode = exports.TrayOnEventMode || (exports.TrayOnEventMode = {}));
var WinDetectHiddenText;
(function (WinDetectHiddenText) {
    WinDetectHiddenText[WinDetectHiddenText["Disable"] = 0] = "Disable";
    WinDetectHiddenText[WinDetectHiddenText["Enable"] = 1] = "Enable";
})(WinDetectHiddenText = exports.WinDetectHiddenText || (exports.WinDetectHiddenText = {}));
var WinSearchChildren;
(function (WinSearchChildren) {
    WinSearchChildren[WinSearchChildren["Disable"] = 0] = "Disable";
    WinSearchChildren[WinSearchChildren["Enable"] = 1] = "Enable";
})(WinSearchChildren = exports.WinSearchChildren || (exports.WinSearchChildren = {}));
var WinTextMatchMode;
(function (WinTextMatchMode) {
    WinTextMatchMode[WinTextMatchMode["Complete"] = 1] = "Complete";
    WinTextMatchMode[WinTextMatchMode["Quick"] = 2] = "Quick";
})(WinTextMatchMode = exports.WinTextMatchMode || (exports.WinTextMatchMode = {}));
var WinTitleMatchMode;
(function (WinTitleMatchMode) {
    WinTitleMatchMode[WinTitleMatchMode["StartsWith"] = 1] = "StartsWith";
    WinTitleMatchMode[WinTitleMatchMode["Contains"] = 2] = "Contains";
    WinTitleMatchMode[WinTitleMatchMode["Exact"] = 3] = "Exact";
    WinTitleMatchMode[WinTitleMatchMode["Advanced"] = 4] = "Advanced";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveStartsWith"] = -1] = "CaseInsensitiveStartsWith";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveContains"] = -2] = "CaseInsensitiveContains";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveExact"] = -3] = "CaseInsensitiveExact";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveAdvanced"] = -4] = "CaseInsensitiveAdvanced";
})(WinTitleMatchMode = exports.WinTitleMatchMode || (exports.WinTitleMatchMode = {}));
