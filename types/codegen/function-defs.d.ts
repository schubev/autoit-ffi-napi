export declare enum Param {
    Int = 0,
    IntSendMode = 1,
    InWstr = 2,
    InWstrCommand = 3,
    InWstrCommandExtra = 4,
    InWstrDescription = 5,
    InWstrMouseButton = 6,
    OutWstr = 7,
    OutWstrSize = 8,
    OutRectangle = 9,
    Hwnd = 10
}
export declare enum Return {
    Void = 0,
    Int = 1,
    IntDiscard = 2,
    IntStatus = 3,
    IntCursor = 4,
    Hwnd = 5
}
export interface ParamDef {
    key: string;
    type: Param;
    default?: string | number;
}
export interface FunctionDef {
    return: Return;
    params: ParamDef[];
    generate: boolean;
}
export declare const defaultInt = -2147483647;
export declare const functions: Record<string, Readonly<FunctionDef>>;
