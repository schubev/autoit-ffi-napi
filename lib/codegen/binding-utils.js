import { Param, Return } from './function-defs';
export function ffiTypeOfReturn(returnType) {
    switch (returnType) {
        case Return.Void:
            return 'void';
        case Return.Int:
        case Return.IntStatus:
            return 'int';
        case Return.Hwnd:
            return 'void*';
    }
}
export function ffiTypeOfParam(paramType) {
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
export function ffiBindingOfDescription(description) {
    return [
        ffiTypeOfReturn(description.return),
        description.params.map(({ type }) => ffiTypeOfParam(type)),
    ];
}
export function ffiBindingOfDescriptions(descriptions) {
    const bindings = {};
    for (const functionName in descriptions) {
        bindings[functionName] = ffiBindingOfDescription(descriptions[functionName]);
    }
    return bindings;
}
export function ffiBindingSourceOfDescriptions(descriptions) {
    const bindings = ffiBindingOfDescriptions(descriptions);
    const bindingsJson = JSON.stringify(bindings, null, 2);
    return `export const bindings : Record<string, [string, string[]]> = ${bindingsJson}`;
}
