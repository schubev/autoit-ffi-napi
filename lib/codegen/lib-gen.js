"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_defs_1 = require("./function-defs");
function tsTypeOfReturnType(returnType) {
    switch (returnType) {
        case function_defs_1.Return.Void:
            return 'void';
        case function_defs_1.Return.Int:
        case function_defs_1.Return.IntStatus:
        case function_defs_1.Return.IntCursor:
        case function_defs_1.Return.IntDiscard:
        case function_defs_1.Return.Hwnd:
            return 'number';
    }
}
function tsTypeOfParamType(paramType) {
    switch (paramType) {
        case function_defs_1.Param.Int:
        case function_defs_1.Param.IntBool:
        case function_defs_1.Param.IntWindowState:
        case function_defs_1.Param.IntSendMode:
        case function_defs_1.Param.Hwnd:
        case function_defs_1.Param.OutWstrSize:
            return 'number';
        case function_defs_1.Param.InWstr:
        case function_defs_1.Param.InWstrCommand:
        case function_defs_1.Param.InWstrCommandExtra:
        case function_defs_1.Param.InWstrDescription:
        case function_defs_1.Param.InWstrMouseButton:
        case function_defs_1.Param.InWstrMouseScrollDirection:
        case function_defs_1.Param.OutWstr:
        case function_defs_1.Param.OutRectangle:
            return 'Buffer';
    }
}
function libFunctionType(name, functionDef) {
    const returnType = tsTypeOfReturnType(functionDef.return);
    const params = functionDef.params.map(({ key, type }) => `${key}: ${tsTypeOfParamType(type)}`);
    params.push(`callback: (error: any, result: ${returnType}) => void`);
    return `${name}: { async(${params.join(', ')}): void }`;
}
function libPromisifiedFunctionType(name, functionDef) {
    const returnType = tsTypeOfReturnType(functionDef.return);
    const params = functionDef.params.map(({ key, type }) => `${key}: ${tsTypeOfParamType(type)}`);
    return `${name}(${params.join(', ')}): Promise<${returnType}>`;
}
function generatePromisifiedLibInterface(functions) {
    const definitions = [];
    for (const functionName in functions) {
        definitions.push(libPromisifiedFunctionType(functionName, functions[functionName]));
    }
    return `export interface PromisifiedAutoitLib {
    ${definitions.join('\n')}
  }`;
}
exports.generatePromisifiedLibInterface = generatePromisifiedLibInterface;
function generateLibInterface(functions) {
    const definitions = [];
    for (const functionName in functions) {
        definitions.push(libFunctionType(functionName, functions[functionName]));
    }
    return `export interface AutoitLib {
    ${definitions.join('\n')}
  }`;
}
exports.generateLibInterface = generateLibInterface;
