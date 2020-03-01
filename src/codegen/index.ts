import { writeFile as writeFileCallback } from 'fs'
import { promisify } from 'util'
import { FunctionDef, functions } from './function-defs'
import { ffiBindingSourceOfDescriptions } from './binding-utils'
import { generateFunction, makePrettyFunctionName } from './function-gen'

const writeFile = promisify(writeFileCallback)

function* generatedFunctions(): Generator<{
  functionName: string
  functionDef: Readonly<FunctionDef>
}> {
  for (const functionName in functions) {
    const functionDef = functions[functionName]
    if (functionDef.generate) yield { functionName, functionDef }
  }
}

async function writeFunctions(): Promise<void> {
  for (const { functionName, functionDef } of generatedFunctions()) {
    const prettyFunctionName = makePrettyFunctionName(functionName)
    const sourcePath = `src/functions/generated/${prettyFunctionName}.ts`
    const source = generateFunction(functionName, functionDef)
    console.log(`write ${functionName} to ${sourcePath}:`)
    console.log(source)
    // await writeFile(sourcePath, source)
  }
}

async function writeBindingSource(): Promise<void> {
  const bindingSource = ffiBindingSourceOfDescriptions(functions)
  await writeFile('src/generated-ffi-bindings.ts', bindingSource)
}

async function main(): Promise<void> {
  await writeBindingSource()
  await writeFunctions()
}

main()
