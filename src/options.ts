export type AutoitOption =
  | 'CaretCoordMode'
  | 'ExpandEnvStrings'
  | 'ExpandVarStrings'
  | 'GuiCloseOnEsc'
  | 'GuiDataSeparatorChar'
  | 'GuiOnEventMode'
  | 'GuiResizeMode'
  | 'GuiEventOptions'
  | 'MouseClickDelay'
  | 'MouseClickDownDelay'
  | 'MouseClickDragDelay'
  | 'MouseCoordMode'
  | 'MustDeclareVars'
  | 'PixelCoordMode'
  | 'SendAttachMode'
  | 'SendCapslockMode'
  | 'SendKeyDelay'
  | 'SendKeyDownDelay'
  | 'TcpTimeout'
  | 'TrayAutoPause'
  | 'TrayIconDebug'
  | 'TrayIconHide'
  | 'TrayMenuMode'
  | 'TrayOnEventMode'
  | 'WinDetectHiddenText'
  | 'WinSearchChildren'
  | 'WinTextMatchMode'
  | 'WinTitleMatchMode'
  | 'WinWaitDelay'

export const AutoitOptionsList: AutoitOption[] = [
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
]

export enum CaretCoordMode {
  Window = 0,
  Screen = 1,
  Client = 2,
}

export enum ExpandEnvStrings {
  Disable = 0,
  Enable = 1,
}

export enum ExpandVarStrings {
  Disable = 0,
  Enable = 1,
}

export enum GuiCloseOnEsc {
  Disable = 0,
  Enable = 1,
}

export enum GuiCoordMode {
  LastControl = 0,
  Window = 1,
  Cell = 2,
}

export type GuiDataSeparatorChar = string

export enum GuiOnEventMode {
  Disable = 0,
  Enable = 1,
}

export enum GuiResizeMode {
  DockAuto = 1,
  DockLeft = 2,
  DockRight = 4,
  DockHorizontalCenter = 8,
  DockTop = 32,
  DockBottom = 64,
  DockVerticalCenter = 128,
  DockWidth = 256,
  DockHeight = 512,
  DockSize = 512 | 256,
  DockMenuBar = 512 | 32,
  DockStateBar = 512 | 64,
  DockAll = 512 | 256 | 32 | 2,
  DockBorders = 64 | 32 | 4 | 2,
}

export enum GuiEventOptions {
  Default = 0,
  Suppress = 1,
}

export type MouseClickDelay = number

export type MouseClickDownDelay = number

export type MouseClickDragDelay = number

export enum MouseCoordMode {
  Window = 0,
  Screen = 1,
  Client = 2,
}

export enum MustDeclareVars {
  Disable = 0,
  Enable = 1,
}

export enum PixelCoordMode {
  Window = 0,
  Screen = 1,
  Client = 2,
}

export enum SendAttachMode {
  Disable = 0,
  Enable = 1,
}

export enum SendCapslockMode {
  NoRestore = 0,
  Store = 1,
}

export type SendKeyDelay = number

export type SendKeyDownDelay = number

export type TcpTimeout = number

export enum TrayAutoPause {
  Disable = 0,
  Enable = 1,
}

export enum TrayIconDebug {
  Disable = 0,
  Enable = 1,
}

export enum TrayIconHide {
  Show = 0,
  Hide = 1,
}

export enum TrayMenuMode {
  DefaultMenu = 0,
  NoDefaultMenu = 1,
  NoAutoCheck = 2,
  NoTrayDefaultOnDoubleClick = 4,
  NoAutoCheckRadio = 8,
}

export enum TrayOnEventMode {
  Disable = 0,
  Enable = 1,
}

export enum WinDetectHiddenText {
  Disable = 0,
  Enable = 1,
}

export enum WinSearchChildren {
  Disable = 0,
  Enable = 1,
}

export enum WinTextMatchMode {
  Complete = 1,
  Quick = 2,
}

export enum WinTitleMatchMode {
  StartsWith = 1,
  Contains = 2,
  Exact = 3,
  Advanced = 4,
  CaseInsensitiveStartsWith = -1,
  CaseInsensitiveContains = -2,
  CaseInsensitiveExact = -3,
  CaseInsensitiveAdvanced = -4,
}

export type WinWaitDelay = number

export interface AutoitOptions {
  CaretCoordMode?: CaretCoordMode
  ExpandEnvStrings?: ExpandEnvStrings
  ExpandVarStrings?: ExpandVarStrings
  GuiCloseOnEsc?: GuiCloseOnEsc
  GuiDataSeparatorChar?: GuiDataSeparatorChar
  GuiOnEventMode?: GuiOnEventMode
  GuiResizeMode?: GuiResizeMode[]
  GuiEventOptions?: GuiEventOptions
  MouseClickDelay?: MouseClickDelay
  MouseClickDownDelay?: MouseClickDownDelay
  MouseClickDragDelay?: MouseClickDragDelay
  MouseCoordMode?: MouseCoordMode
  MustDeclareVars?: MustDeclareVars
  PixelCoordMode?: PixelCoordMode
  SendAttachMode?: SendAttachMode
  SendCapslockMode?: SendCapslockMode
  SendKeyDelay?: SendKeyDelay
  SendKeyDownDelay?: SendKeyDownDelay
  TcpTimeout?: TcpTimeout
  TrayAutoPause?: TrayAutoPause
  TrayIconDebug?: TrayIconDebug
  TrayIconHide?: TrayIconHide
  TrayMenuMode?: TrayMenuMode[]
  TrayOnEventMode?: TrayOnEventMode
  WinDetectHiddenText?: WinDetectHiddenText
  WinSearchChildren?: WinSearchChildren
  WinTextMatchMode?: WinTextMatchMode
  WinTitleMatchMode?: WinTitleMatchMode
  WinWaitDelay?: WinWaitDelay
}
