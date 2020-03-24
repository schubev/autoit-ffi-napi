import { Library } from 'ffi-napi'
import { promisify } from 'util'
import { bindings } from './generated-ffi-bindings'
import { PromisifiedAutoitLib } from './generated-lib-type'

export function ffiLibrary(path = './AutoItX3.dll'): PromisifiedAutoitLib {
  const callbackLibrary = Library(path, bindings)
  const promisifiedLibrary: Record<string, any> = {}
  for (const functionName in callbackLibrary)
    promisifiedLibrary[functionName] = promisify(
      callbackLibrary[functionName].async,
    )
  return promisifiedLibrary as any
}
