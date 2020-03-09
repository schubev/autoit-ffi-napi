"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_defs_1 = require("../function-defs");
const binding_utils_1 = require("../binding-utils");
describe(binding_utils_1.ffiTypeOfReturn, () => {
    it.each([
        [function_defs_1.Return.Void, 'void'],
        [function_defs_1.Return.Int, 'int'],
        [function_defs_1.Return.Hwnd, 'void*'],
    ])('return type %p is ffi type %p', (autoitReturn, ffiReturn) => {
        expect(binding_utils_1.ffiTypeOfReturn(autoitReturn)).toEqual(ffiReturn);
    });
});
describe(binding_utils_1.ffiTypeOfParam, () => {
    it.each([
        [function_defs_1.Param.Int, 'int'],
        [function_defs_1.Param.OutWstrSize, 'int'],
        [function_defs_1.Param.IntSendMode, 'int'],
        [function_defs_1.Param.Hwnd, 'void*'],
        [function_defs_1.Param.OutRectangle, 'void*'],
        [function_defs_1.Param.InWstr, 'uint16*'],
        [function_defs_1.Param.InWstrCommand, 'uint16*'],
        [function_defs_1.Param.InWstrCommandExtra, 'uint16*'],
        [function_defs_1.Param.InWstrDescription, 'uint16*'],
        [function_defs_1.Param.InWstrMouseButton, 'uint16*'],
        [function_defs_1.Param.OutWstr, 'uint16*'],
    ])('param type %p is ffi type %p', (autoitParam, ffiParam) => {
        expect(binding_utils_1.ffiTypeOfParam(autoitParam)).toEqual(ffiParam);
    });
});
describe(binding_utils_1.ffiBindingOfDescription, () => {
    it.each([
        [{ return: function_defs_1.Return.Void, params: [] }, ['void', []]],
        [
            { return: function_defs_1.Return.Int, params: [{ key: 'param', type: function_defs_1.Param.Int }] },
            ['int', ['int']],
        ],
        [
            {
                return: function_defs_1.Return.Hwnd,
                params: [
                    { key: 'title', type: function_defs_1.Param.InWstrDescription },
                    { key: 'text', type: function_defs_1.Param.InWstr },
                    { key: 'extra', type: function_defs_1.Param.Int },
                ],
            },
            ['void*', ['uint16*', 'uint16*', 'int']],
        ],
    ])('function type %j is ffi type %j', (autoitSignature, ffiSignature) => {
        expect(binding_utils_1.ffiBindingOfDescription(autoitSignature)).toEqual(ffiSignature);
    });
});
describe(binding_utils_1.ffiBindingOfDescriptions, () => {
    it.each(Object.keys(function_defs_1.functions))('builds bindings for %s', name => {
        expect(binding_utils_1.ffiBindingOfDescriptions(function_defs_1.functions)[name]).toMatchSnapshot();
    });
});
describe(binding_utils_1.ffiBindingSourceOfDescriptions, () => {
    it('builds a source file for bindings', () => {
        expect(binding_utils_1.ffiBindingSourceOfDescriptions(function_defs_1.functions)).toMatchSnapshot();
    });
});
