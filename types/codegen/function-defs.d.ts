export declare enum Param {
    Int = 0,
    InWstr = 1,
    InWstrCommand = 2,
    InWstrCommandExtra = 3,
    InWstrDescription = 4,
    InWstrMouseButton = 5,
    OutWstr = 6,
    OutWstrSize = 7,
    OutRectangle = 8,
    Hwnd = 9,
    SendMode = 10
}
export declare enum Return {
    Void = 0,
    Int = 1,
    IntStatus = 2,
    IntCursor = 3,
    Hwnd = 4
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
