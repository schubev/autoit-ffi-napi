"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_defs_1 = require("./function-defs");
function ffiTypeOfReturn(returnType) {
    switch (returnType) {
        case function_defs_1.Return.Void:
            return 'void';
        case function_defs_1.Return.Int:
        case function_defs_1.Return.IntStatus:
        case function_defs_1.Return.IntDiscard:
        case function_defs_1.Return.IntCursor:
        case function_defs_1.Return.IntWindowState:
            return 'int';
        case function_defs_1.Return.Hwnd:
            return 'void*';
    }
}
exports.ffiTypeOfReturn = ffiTypeOfReturn;
function ffiTypeOfParam(paramType) {
    switch (paramType) {
        case function_defs_1.Param.Int:
        case function_defs_1.Param.OutWstrSize:
        case function_defs_1.Param.IntBool:
        case function_defs_1.Param.IntSendMode:
        case function_defs_1.Param.IntSetWindowState:
            return 'int';
        case function_defs_1.Param.Hwnd:
        case function_defs_1.Param.OutPoint:
        case function_defs_1.Param.OutRectangle:
            return 'void*';
        case function_defs_1.Param.InWstr:
        case function_defs_1.Param.InWstrCommand:
        case function_defs_1.Param.InWstrCommandExtra:
        case function_defs_1.Param.InWstrDescription:
        case function_defs_1.Param.InWstrMouseButton:
        case function_defs_1.Param.InWstrMouseScrollDirection:
        case function_defs_1.Param.OutWstr:
            return 'uint16*';
    }
}
exports.ffiTypeOfParam = ffiTypeOfParam;
function ffiBindingOfDescription(description) {
    return [
        ffiTypeOfReturn(description.return),
        description.params.map(({ type }) => ffiTypeOfParam(type)),
    ];
}
exports.ffiBindingOfDescription = ffiBindingOfDescription;
function ffiBindingOfDescriptions(descriptions) {
    const bindings = {};
    for (const functionName in descriptions) {
        bindings[functionName] = ffiBindingOfDescription(descriptions[functionName]);
    }
    return bindings;
}
exports.ffiBindingOfDescriptions = ffiBindingOfDescriptions;
function ffiBindingSourceOfDescriptions(descriptions) {
    const bindings = ffiBindingOfDescriptions(descriptions);
    const bindingsJson = JSON.stringify(bindings, null, 2);
    return `export const bindings : Record<string, [string, string[]]> = ${bindingsJson}`;
}
exports.ffiBindingSourceOfDescriptions = ffiBindingSourceOfDescriptions;
