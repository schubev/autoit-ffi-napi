import { functions, Return, Param } from '../function-defs';
import { ffiTypeOfReturn, ffiTypeOfParam, ffiBindingOfDescription, ffiBindingOfDescriptions, ffiBindingSourceOfDescriptions, } from '../binding-utils';
describe(ffiTypeOfReturn, () => {
    it.each([
        [Return.Void, 'void'],
        [Return.Int, 'int'],
        [Return.Hwnd, 'void*'],
    ])('return type %p is ffi type %p', (autoitReturn, ffiReturn) => {
        expect(ffiTypeOfReturn(autoitReturn)).toEqual(ffiReturn);
    });
});
describe(ffiTypeOfParam, () => {
    it.each([
        [Param.Int, 'int'],
        [Param.OutWstrSize, 'int'],
        [Param.IntSendMode, 'int'],
        [Param.Hwnd, 'void*'],
        [Param.OutRectangle, 'void*'],
        [Param.InWstr, 'uint16*'],
        [Param.InWstrCommand, 'uint16*'],
        [Param.InWstrCommandExtra, 'uint16*'],
        [Param.InWstrDescription, 'uint16*'],
        [Param.InWstrMouseButton, 'uint16*'],
        [Param.OutWstr, 'uint16*'],
    ])('param type %p is ffi type %p', (autoitParam, ffiParam) => {
        expect(ffiTypeOfParam(autoitParam)).toEqual(ffiParam);
    });
});
describe(ffiBindingOfDescription, () => {
    it.each([
        [{ return: Return.Void, params: [] }, ['void', []]],
        [
            { return: Return.Int, params: [{ key: 'param', type: Param.Int }] },
            ['int', ['int']],
        ],
        [
            {
                return: Return.Hwnd,
                params: [
                    { key: 'title', type: Param.InWstrDescription },
                    { key: 'text', type: Param.InWstr },
                    { key: 'extra', type: Param.Int },
                ],
            },
            ['void*', ['uint16*', 'uint16*', 'int']],
        ],
    ])('function type %j is ffi type %j', (autoitSignature, ffiSignature) => {
        expect(ffiBindingOfDescription(autoitSignature)).toEqual(ffiSignature);
    });
});
describe(ffiBindingOfDescriptions, () => {
    it.each(Object.keys(functions))('builds bindings for %s', name => {
        expect(ffiBindingOfDescriptions(functions)[name]).toMatchSnapshot();
    });
});
describe(ffiBindingSourceOfDescriptions, () => {
    it('builds a source file for bindings', () => {
        expect(ffiBindingSourceOfDescriptions(functions)).toMatchSnapshot();
    });
});
