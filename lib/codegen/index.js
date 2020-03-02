import { writeFile as writeFileCallback } from 'fs';
import { promisify } from 'util';
import { functions } from './function-defs';
import { ffiBindingSourceOfDescriptions } from './binding-utils';
import { generateFunction, makePrettyFunctionName } from './function-gen';
const writeFile = promisify(writeFileCallback);
function* generatedFunctions() {
    for (const functionName in functions) {
        const functionDef = functions[functionName];
        if (functionDef.generate)
            yield { functionName, functionDef };
    }
}
async function writeFunctions() {
    for (const { functionName, functionDef } of generatedFunctions()) {
        const prettyFunctionName = makePrettyFunctionName(functionName);
        const sourcePath = `src/functions/generated/${prettyFunctionName}.ts`;
        const source = generateFunction(functionName, functionDef);
        console.log(`generating function ${prettyFunctionName} at ${sourcePath}...`);
        await writeFile(sourcePath, source);
    }
}
async function writeBindingSource() {
    const bindingSource = ffiBindingSourceOfDescriptions(functions);
    await writeFile('src/generated-ffi-bindings.ts', bindingSource);
}
async function main() {
    await writeBindingSource();
    await writeFunctions();
}
main();
