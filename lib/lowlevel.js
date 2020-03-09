"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_napi_1 = require("ffi-napi");
const generated_ffi_bindings_1 = require("./generated-ffi-bindings");
function ffiLibrary(path = './AutoItX3.dll') {
    return ffi_napi_1.Library(path, generated_ffi_bindings_1.bindings);
}
exports.lib = ffiLibrary();
