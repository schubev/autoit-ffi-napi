"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const function_defs_1 = require("./function-defs");
const binding_utils_1 = require("./binding-utils");
const function_gen_1 = require("./function-gen");
const writeFile = util_1.promisify(fs_1.writeFile);
function* generatedFunctions() {
    for (const functionName in function_defs_1.functions) {
        const functionDef = function_defs_1.functions[functionName];
        if (functionDef.generate)
            yield { functionName, functionDef };
    }
}
async function writeFunctions() {
    for (const { functionName, functionDef } of generatedFunctions()) {
        const prettyFunctionName = function_gen_1.makePrettyFunctionName(functionName);
        const sourcePath = `src/functions/generated/${prettyFunctionName}.ts`;
        const source = function_gen_1.generateFunction(functionName, functionDef);
        console.log(`generating function ${prettyFunctionName} at ${sourcePath}...`);
        await writeFile(sourcePath, source);
    }
}
async function writeBindingSource() {
    const bindingSource = binding_utils_1.ffiBindingSourceOfDescriptions(function_defs_1.functions);
    await writeFile('src/generated-ffi-bindings.ts', bindingSource);
}
async function main() {
    await writeBindingSource();
    await writeFunctions();
}
main();
