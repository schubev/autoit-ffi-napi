"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_napi_1 = require("ffi-napi");
const util_1 = require("util");
const generated_ffi_bindings_1 = require("./generated-ffi-bindings");
function ffiLibrary(path = './AutoItX3.dll') {
    const callbackLibrary = ffi_napi_1.Library(path, generated_ffi_bindings_1.bindings);
    const promisifiedLibrary = {};
    for (const functionName in callbackLibrary)
        promisifiedLibrary[functionName] = util_1.promisify(callbackLibrary[functionName].async);
    return promisifiedLibrary;
}
exports.ffiLibrary = ffiLibrary;
