import { functions, Param, Return, FunctionDef } from './functions'
import { Library, Signature } from 'ffi-napi'

function ffiTypeOfReturn(returnType: Return): string {
  switch (returnType) {
    case Return.Void:
      return 'void'
    case Return.Int:
      return 'int'
    case Return.Hwnd:
      return 'void*'
  }
}

function ffiTypeOfParam(paramType: Param): string {
  switch (paramType) {
    case Param.Int:
    case Param.OutWstrSize:
    case Param.SendMode:
      return 'int'
    case Param.Hwnd:
    case Param.OutRectangle: // TODO: make correct struct
      return 'void*'
    case Param.InWstr:
    case Param.InWstrCommand:
    case Param.InWstrCommandExtra:
    case Param.InWstrDescription:
    case Param.InWstrMouseButton:
    case Param.OutWstr:
      return 'uint16*'
  }
}

function ffiBindingOfDescription(description: FunctionDef): Signature {
  return [
    ffiTypeOfReturn(description[0]),
    description[1].map(([, def]) => ffiTypeOfParam(def)),
  ]
}

function ffiBindingOfDescriptions(
  descriptions: Record<string, FunctionDef>,
): Record<string, Signature> {
  const bindings: Record<string, Signature> = {}
  for (const functionName in descriptions) {
    bindings[functionName] = ffiBindingOfDescription(descriptions[functionName])
  }
  return bindings
}

function ffiLibrary(
  descriptions: Record<string, FunctionDef>,
  path = './AutoItX3.dll',
): Record<string, any> {
  return Library(path, ffiBindingOfDescriptions(descriptions))
}

export const lib = ffiLibrary(functions)
