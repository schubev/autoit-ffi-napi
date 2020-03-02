export declare enum Param {
    Int = "Int",
    InWstr = "IntWstr",
    InWstrCommand = "InWstrCommand",
    InWstrCommandExtra = "InWstrCommandExtra",
    InWstrDescription = "InWstrDescription",
    InWstrMouseButton = "InWstrMouseButton",
    OutWstr = "OutWstr",
    OutWstrSize = "OutWstrSize",
    OutRectangle = "OutRectangle",
    Hwnd = "Hwnd",
    SendMode = "SendMode"
}
export declare enum Return {
    Void = "Void",
    Int = "Int",
    IntStatus = "IntStatus",
    Hwnd = "Hwnd"
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
