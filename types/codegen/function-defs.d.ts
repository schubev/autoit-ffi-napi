export declare enum Param {
    Int = 0,
    IntBool = 1,
    IntSendMode = 2,
    InWstr = 3,
    InWstrCommand = 4,
    InWstrCommandExtra = 5,
    InWstrDescription = 6,
    InWstrMouseButton = 7,
    InWstrMouseScrollDirection = 8,
    OutWstr = 9,
    OutWstrSize = 10,
    OutRectangle = 11,
    Hwnd = 12
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
