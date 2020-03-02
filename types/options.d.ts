export declare type AutoitOption = 'CaretCoordMode' | 'ExpandEnvStrings' | 'ExpandVarStrings' | 'GuiCloseOnEsc' | 'GuiDataSeparatorChar' | 'GuiOnEventMode' | 'GuiResizeMode' | 'GuiEventOptions' | 'MouseClickDelay' | 'MouseClickDownDelay' | 'MouseClickDragDelay' | 'MouseCoordMode' | 'MustDeclareVars' | 'PixelCoordMode' | 'SendAttachMode' | 'SendCapslockMode' | 'SendKeyDelay' | 'SendKeyDownDelay' | 'TcpTimeout' | 'TrayAutoPause' | 'TrayIconDebug' | 'TrayIconHide' | 'TrayMenuMode' | 'TrayOnEventMode' | 'WinDetectHiddenText' | 'WinSearchChildren' | 'WinTextMatchMode' | 'WinTitleMatchMode' | 'WinWaitDelay';
export declare const AutoitOptionsList: AutoitOption[];
export declare enum CaretCoordMode {
    Window = 0,
    Screen = 1,
    Client = 2
}
export declare enum ExpandEnvStrings {
    Disable = 0,
    Enable = 1
}
export declare enum ExpandVarStrings {
    Disable = 0,
    Enable = 1
}
export declare enum GuiCloseOnEsc {
    Disable = 0,
    Enable = 1
}
export declare enum GuiCoordMode {
    LastControl = 0,
    Window = 1,
    Cell = 2
}
export declare type GuiDataSeparatorChar = string;
export declare enum GuiOnEventMode {
    Disable = 0,
    Enable = 1
}
export declare enum GuiResizeMode {
    DockAuto = 1,
    DockLeft = 2,
    DockRight = 4,
    DockHorizontalCenter = 8,
    DockTop = 32,
    DockBottom = 64,
    DockVerticalCenter = 128,
    DockWidth = 256,
    DockHeight = 512,
    DockSize = 768,
    DockMenuBar = 544,
    DockStateBar = 576,
    DockAll = 802,
    DockBorders = 102
}
export declare enum GuiEventOptions {
    Default = 0,
    Suppress = 1
}
export declare type MouseClickDelay = number;
export declare type MouseClickDownDelay = number;
export declare type MouseClickDragDelay = number;
export declare enum MouseCoordMode {
    Window = 0,
    Screen = 1,
    Client = 2
}
export declare enum MustDeclareVars {
    Disable = 0,
    Enable = 1
}
export declare enum PixelCoordMode {
    Window = 0,
    Screen = 1,
    Client = 2
}
export declare enum SendAttachMode {
    Disable = 0,
    Enable = 1
}
export declare enum SendCapslockMode {
    NoRestore = 0,
    Store = 1
}
export declare type SendKeyDelay = number;
export declare type SendKeyDownDelay = number;
export declare type TcpTimeout = number;
export declare enum TrayAutoPause {
    Disable = 0,
    Enable = 1
}
export declare enum TrayIconDebug {
    Disable = 0,
    Enable = 1
}
export declare enum TrayIconHide {
    Show = 0,
    Hide = 1
}
export declare enum TrayMenuMode {
    DefaultMenu = 0,
    NoDefaultMenu = 1,
    NoAutoCheck = 2,
    NoTrayDefaultOnDoubleClick = 4,
    NoAutoCheckRadio = 8
}
export declare enum TrayOnEventMode {
    Disable = 0,
    Enable = 1
}
export declare enum WinDetectHiddenText {
    Disable = 0,
    Enable = 1
}
export declare enum WinSearchChildren {
    Disable = 0,
    Enable = 1
}
export declare enum WinTextMatchMode {
    Complete = 1,
    Quick = 2
}
export declare enum WinTitleMatchMode {
    StartsWith = 1,
    Contains = 2,
    Exact = 3,
    Advanced = 4,
    CaseInsensitiveStartsWith = -1,
    CaseInsensitiveContains = -2,
    CaseInsensitiveExact = -3,
    CaseInsensitiveAdvanced = -4
}
export declare type WinWaitDelay = number;
export interface AutoitOptions {
    CaretCoordMode?: CaretCoordMode;
    ExpandEnvStrings?: ExpandEnvStrings;
    ExpandVarStrings?: ExpandVarStrings;
    GuiCloseOnEsc?: GuiCloseOnEsc;
    GuiDataSeparatorChar?: GuiDataSeparatorChar;
    GuiOnEventMode?: GuiOnEventMode;
    GuiResizeMode?: GuiResizeMode[];
    GuiEventOptions?: GuiEventOptions;
    MouseClickDelay?: MouseClickDelay;
    MouseClickDownDelay?: MouseClickDownDelay;
    MouseClickDragDelay?: MouseClickDragDelay;
    MouseCoordMode?: MouseCoordMode;
    MustDeclareVars?: MustDeclareVars;
    PixelCoordMode?: PixelCoordMode;
    SendAttachMode?: SendAttachMode;
    SendCapslockMode?: SendCapslockMode;
    SendKeyDelay?: SendKeyDelay;
    SendKeyDownDelay?: SendKeyDownDelay;
    TcpTimeout?: TcpTimeout;
    TrayAutoPause?: TrayAutoPause;
    TrayIconDebug?: TrayIconDebug;
    TrayIconHide?: TrayIconHide;
    TrayMenuMode?: TrayMenuMode[];
    TrayOnEventMode?: TrayOnEventMode;
    WinDetectHiddenText?: WinDetectHiddenText;
    WinSearchChildren?: WinSearchChildren;
    WinTextMatchMode?: WinTextMatchMode;
    WinTitleMatchMode?: WinTitleMatchMode;
    WinWaitDelay?: WinWaitDelay;
}
