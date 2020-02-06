import { functions, Param, Return } from './functions';
import { Library } from 'ffi-napi';
export function helloWorld() {
    console.log('hello, world!');
}
function ffiTypeOfReturn(returnType) {
    switch (returnType) {
        case Return.Void:
            return 'void';
        case Return.Int:
            return 'int';
        case Return.Hwnd:
            return 'void*';
    }
}
function ffiTypeOfParam(paramType) {
    switch (paramType) {
        case Param.Int:
        case Param.OutWstrSize:
        case Param.SendMode:
            return 'int';
        case Param.Hwnd:
        case Param.OutRectangle: // TODO: make correct struct
            return 'void*';
        case Param.InWstr:
        case Param.InWstrCommand:
        case Param.InWstrCommandExtra:
        case Param.InWstrDescription:
        case Param.InWstrMouseButton:
        case Param.OutWstr:
            return 'uint16*';
    }
}
function ffiBindingOfDescription(description) {
    return [
        ffiTypeOfReturn(description[0]),
        description[1].map(([, def]) => ffiTypeOfParam(def)),
    ];
}
function ffiBindingOfDescriptions(descriptions) {
    const bindings = {};
    for (const functionName in descriptions) {
        bindings[functionName] = ffiBindingOfDescription(descriptions[functionName]);
    }
    return bindings;
}
function ffiLibrary(descriptions, path = './AutoItX3.dll') {
    return Library(path, ffiBindingOfDescriptions(descriptions));
}
export const lib = ffiLibrary(functions);
