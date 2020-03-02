import { Library } from 'ffi-napi';
import { bindings } from './generated-ffi-bindings';
function ffiLibrary(path = './AutoItX3.dll') {
    return Library(path, bindings);
}
export const lib = ffiLibrary();
