"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const function_defs_1 = require("./function-defs");
const binding_utils_1 = require("./binding-utils");
const function_gen_cpp_1 = require("./function-gen-cpp");
const lib_gen_1 = require("./lib-gen");
const writeFile = util_1.promisify(fs_1.writeFile);
function* generatedFunctions() {
    for (const functionName in function_defs_1.functions) {
        const functionDef = function_defs_1.functions[functionName];
        if (functionDef.generate)
            yield { functionName, functionDef };
    }
}
function makeSourcePath(functionName) {
    return `native/functions/${function_gen_cpp_1.makePrettyFunctionName(functionName)}.c`;
}
function writeFunctions() {
    return Promise.all(Array.from(generatedFunctions()).map(({ functionName, functionDef }) => {
        const prettyFunctionName = function_gen_cpp_1.makePrettyFunctionName(functionName);
        const sourcePath = makeSourcePath(functionName);
        const source = function_gen_cpp_1.generateFunction(functionName, functionDef);
        console.log(`generating function ${prettyFunctionName} at ${sourcePath}...`);
        return writeFile(sourcePath, source);
    }));
}
function nativeSources() {
    const functionSources = Array.from(generatedFunctions()).map(({ functionName }) => makeSourcePath(functionName));
    return ['native/helpers.c', 'native/autoit.c', ...functionSources];
}
function writeAutoitEntrypoint() {
    return writeFile('native/autoit.c', lib_gen_1.generateEntrypoint(Array.from(generatedFunctions()).map(({ functionName }) => functionName)));
}
function writeBindingGyp() {
    return writeFile('binding.gyp', JSON.stringify({
        targets: [
            {
                target_name: 'autoit',
                cflags: ['-Wall', '-Wextra', '-Werror', '-Wno-unused-parameter'],
                include_dirs: ['native'],
                libraries: ['<(module_root_dir)/native/AutoItX3.dll'],
                sources: nativeSources(),
            },
        ],
    }, null, 2));
}
function writeBindingSource() {
    const bindingSource = binding_utils_1.ffiBindingSourceOfDescriptions(function_defs_1.functions);
    return writeFile('src/generated-ffi-bindings.ts', bindingSource);
}
function writeLibType() {
    const libTypeSource = lib_gen_1.generateLibInterface(function_defs_1.functions);
    const promisifiedLibTypeSource = lib_gen_1.generatePromisifiedLibInterface(function_defs_1.functions);
    return writeFile('src/generated-lib-type.ts', libTypeSource + '\n\n' + promisifiedLibTypeSource);
}
function main() {
    return Promise.all([
        writeBindingSource(),
        writeFunctions(),
        writeLibType(),
        writeBindingGyp(),
        writeAutoitEntrypoint(),
    ]);
}
main();
