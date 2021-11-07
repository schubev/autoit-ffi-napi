import { writeFile as writeFileCallback } from 'fs'
import { promisify } from 'util'
import { FunctionDef, functions } from './function-defs'
import { ffiBindingSourceOfDescriptions } from './binding-utils'
import { generateFunction, makePrettyFunctionName } from './function-gen-cpp'
import {
  generateLibInterface,
  generatePromisifiedLibInterface,
  generateEntrypoint,
} from './lib-gen'

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

function makeSourcePath(functionName: string): string {
  return `native/functions/${makePrettyFunctionName(functionName)}.c`
}

function writeFunctions(): Promise<unknown> {
  return Promise.all(
    Array.from(generatedFunctions()).map(({ functionName, functionDef }) => {
      const prettyFunctionName = makePrettyFunctionName(functionName)
      const sourcePath = makeSourcePath(functionName)
      const source = generateFunction(functionName, functionDef)
      console.log(
        `generating function ${prettyFunctionName} at ${sourcePath}...`,
      )
      return writeFile(sourcePath, source)
    }),
  )
}

function nativeSources(): string[] {
  const functionSources = Array.from(
    generatedFunctions(),
  ).map(({ functionName }) => makeSourcePath(functionName))
  return ['native/helpers.c', 'native/autoit.c', ...functionSources]
}

function writeAutoitEntrypoint(): Promise<void> {
  return writeFile(
    'native/autoit.c',
    generateEntrypoint(
      Array.from(generatedFunctions()).map(({ functionName }) => functionName),
    ),
  )
}

function writeBindingGyp(): Promise<void> {
  return writeFile(
    'binding.gyp',
    JSON.stringify(
      {
        targets: [
          {
            target_name: 'autoit',
            cflags: ['-Wall', '-Wextra', '-Werror', '-Wno-unused-parameter'],
            include_dirs: ['native'],
            libraries: ['<(module_root_dir)/native/AutoItX3_DLL.lib'],
            sources: nativeSources(),
          },
        ],
      },
      null,
      2,
    ),
  )
}

function writeBindingSource(): Promise<void> {
  const bindingSource = ffiBindingSourceOfDescriptions(functions)
  return writeFile('src/generated-ffi-bindings.ts', bindingSource)
}

function writeLibType(): Promise<void> {
  const libTypeSource = generateLibInterface(functions)
  const promisifiedLibTypeSource = generatePromisifiedLibInterface(functions)
  return writeFile(
    'src/generated-lib-type.ts',
    libTypeSource + '\n\n' + promisifiedLibTypeSource,
  )
}

function main(): Promise<unknown> {
  return Promise.all([
    writeBindingSource(),
    writeFunctions(),
    writeLibType(),
    writeBindingGyp(),
    writeAutoitEntrypoint(),
  ])
}

main()
