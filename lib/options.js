export const AutoitOptionsList = [
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
export var CaretCoordMode;
(function (CaretCoordMode) {
    CaretCoordMode[CaretCoordMode["Window"] = 0] = "Window";
    CaretCoordMode[CaretCoordMode["Screen"] = 1] = "Screen";
    CaretCoordMode[CaretCoordMode["Client"] = 2] = "Client";
})(CaretCoordMode || (CaretCoordMode = {}));
export var ExpandEnvStrings;
(function (ExpandEnvStrings) {
    ExpandEnvStrings[ExpandEnvStrings["Disable"] = 0] = "Disable";
    ExpandEnvStrings[ExpandEnvStrings["Enable"] = 1] = "Enable";
})(ExpandEnvStrings || (ExpandEnvStrings = {}));
export var ExpandVarStrings;
(function (ExpandVarStrings) {
    ExpandVarStrings[ExpandVarStrings["Disable"] = 0] = "Disable";
    ExpandVarStrings[ExpandVarStrings["Enable"] = 1] = "Enable";
})(ExpandVarStrings || (ExpandVarStrings = {}));
export var GuiCloseOnEsc;
(function (GuiCloseOnEsc) {
    GuiCloseOnEsc[GuiCloseOnEsc["Disable"] = 0] = "Disable";
    GuiCloseOnEsc[GuiCloseOnEsc["Enable"] = 1] = "Enable";
})(GuiCloseOnEsc || (GuiCloseOnEsc = {}));
export var GuiCoordMode;
(function (GuiCoordMode) {
    GuiCoordMode[GuiCoordMode["LastControl"] = 0] = "LastControl";
    GuiCoordMode[GuiCoordMode["Window"] = 1] = "Window";
    GuiCoordMode[GuiCoordMode["Cell"] = 2] = "Cell";
})(GuiCoordMode || (GuiCoordMode = {}));
export var GuiOnEventMode;
(function (GuiOnEventMode) {
    GuiOnEventMode[GuiOnEventMode["Disable"] = 0] = "Disable";
    GuiOnEventMode[GuiOnEventMode["Enable"] = 1] = "Enable";
})(GuiOnEventMode || (GuiOnEventMode = {}));
export var GuiResizeMode;
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
})(GuiResizeMode || (GuiResizeMode = {}));
export var GuiEventOptions;
(function (GuiEventOptions) {
    GuiEventOptions[GuiEventOptions["Default"] = 0] = "Default";
    GuiEventOptions[GuiEventOptions["Suppress"] = 1] = "Suppress";
})(GuiEventOptions || (GuiEventOptions = {}));
export var MouseCoordMode;
(function (MouseCoordMode) {
    MouseCoordMode[MouseCoordMode["Window"] = 0] = "Window";
    MouseCoordMode[MouseCoordMode["Screen"] = 1] = "Screen";
    MouseCoordMode[MouseCoordMode["Client"] = 2] = "Client";
})(MouseCoordMode || (MouseCoordMode = {}));
export var MustDeclareVars;
(function (MustDeclareVars) {
    MustDeclareVars[MustDeclareVars["Disable"] = 0] = "Disable";
    MustDeclareVars[MustDeclareVars["Enable"] = 1] = "Enable";
})(MustDeclareVars || (MustDeclareVars = {}));
export var PixelCoordMode;
(function (PixelCoordMode) {
    PixelCoordMode[PixelCoordMode["Window"] = 0] = "Window";
    PixelCoordMode[PixelCoordMode["Screen"] = 1] = "Screen";
    PixelCoordMode[PixelCoordMode["Client"] = 2] = "Client";
})(PixelCoordMode || (PixelCoordMode = {}));
export var SendAttachMode;
(function (SendAttachMode) {
    SendAttachMode[SendAttachMode["Disable"] = 0] = "Disable";
    SendAttachMode[SendAttachMode["Enable"] = 1] = "Enable";
})(SendAttachMode || (SendAttachMode = {}));
export var SendCapslockMode;
(function (SendCapslockMode) {
    SendCapslockMode[SendCapslockMode["NoRestore"] = 0] = "NoRestore";
    SendCapslockMode[SendCapslockMode["Store"] = 1] = "Store";
})(SendCapslockMode || (SendCapslockMode = {}));
export var TrayAutoPause;
(function (TrayAutoPause) {
    TrayAutoPause[TrayAutoPause["Disable"] = 0] = "Disable";
    TrayAutoPause[TrayAutoPause["Enable"] = 1] = "Enable";
})(TrayAutoPause || (TrayAutoPause = {}));
export var TrayIconDebug;
(function (TrayIconDebug) {
    TrayIconDebug[TrayIconDebug["Disable"] = 0] = "Disable";
    TrayIconDebug[TrayIconDebug["Enable"] = 1] = "Enable";
})(TrayIconDebug || (TrayIconDebug = {}));
export var TrayIconHide;
(function (TrayIconHide) {
    TrayIconHide[TrayIconHide["Show"] = 0] = "Show";
    TrayIconHide[TrayIconHide["Hide"] = 1] = "Hide";
})(TrayIconHide || (TrayIconHide = {}));
export var TrayMenuMode;
(function (TrayMenuMode) {
    TrayMenuMode[TrayMenuMode["DefaultMenu"] = 0] = "DefaultMenu";
    TrayMenuMode[TrayMenuMode["NoDefaultMenu"] = 1] = "NoDefaultMenu";
    TrayMenuMode[TrayMenuMode["NoAutoCheck"] = 2] = "NoAutoCheck";
    TrayMenuMode[TrayMenuMode["NoTrayDefaultOnDoubleClick"] = 4] = "NoTrayDefaultOnDoubleClick";
    TrayMenuMode[TrayMenuMode["NoAutoCheckRadio"] = 8] = "NoAutoCheckRadio";
})(TrayMenuMode || (TrayMenuMode = {}));
export var TrayOnEventMode;
(function (TrayOnEventMode) {
    TrayOnEventMode[TrayOnEventMode["Disable"] = 0] = "Disable";
    TrayOnEventMode[TrayOnEventMode["Enable"] = 1] = "Enable";
})(TrayOnEventMode || (TrayOnEventMode = {}));
export var WinDetectHiddenText;
(function (WinDetectHiddenText) {
    WinDetectHiddenText[WinDetectHiddenText["Disable"] = 0] = "Disable";
    WinDetectHiddenText[WinDetectHiddenText["Enable"] = 1] = "Enable";
})(WinDetectHiddenText || (WinDetectHiddenText = {}));
export var WinSearchChildren;
(function (WinSearchChildren) {
    WinSearchChildren[WinSearchChildren["Disable"] = 0] = "Disable";
    WinSearchChildren[WinSearchChildren["Enable"] = 1] = "Enable";
})(WinSearchChildren || (WinSearchChildren = {}));
export var WinTextMatchMode;
(function (WinTextMatchMode) {
    WinTextMatchMode[WinTextMatchMode["Complete"] = 1] = "Complete";
    WinTextMatchMode[WinTextMatchMode["Quick"] = 2] = "Quick";
})(WinTextMatchMode || (WinTextMatchMode = {}));
export var WinTitleMatchMode;
(function (WinTitleMatchMode) {
    WinTitleMatchMode[WinTitleMatchMode["StartsWith"] = 1] = "StartsWith";
    WinTitleMatchMode[WinTitleMatchMode["Contains"] = 2] = "Contains";
    WinTitleMatchMode[WinTitleMatchMode["Exact"] = 3] = "Exact";
    WinTitleMatchMode[WinTitleMatchMode["Advanced"] = 4] = "Advanced";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveStartsWith"] = -1] = "CaseInsensitiveStartsWith";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveContains"] = -2] = "CaseInsensitiveContains";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveExact"] = -3] = "CaseInsensitiveExact";
    WinTitleMatchMode[WinTitleMatchMode["CaseInsensitiveAdvanced"] = -4] = "CaseInsensitiveAdvanced";
})(WinTitleMatchMode || (WinTitleMatchMode = {}));
