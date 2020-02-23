import { Library } from 'ffi-napi'
import { functions, FunctionDef } from './function-defs'
import { ffiBindingOfDescriptions } from './binding-utils'

function ffiLibrary(
  descriptions: Record<string, FunctionDef>,
  path = './AutoItX3.dll',
): Record<string, any> {
  return Library(path, ffiBindingOfDescriptions(descriptions))
}

export const lib = ffiLibrary(functions)
