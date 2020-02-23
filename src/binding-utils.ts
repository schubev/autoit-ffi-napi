import { Param, Return, FunctionDef } from './function-defs'

type Signature = [string, string[]]

export function ffiTypeOfReturn(returnType: Return): string {
  switch (returnType) {
    case Return.Void:
      return 'void'
    case Return.Int:
      return 'int'
    case Return.Hwnd:
      return 'void*'
  }
}

export function ffiTypeOfParam(paramType: Param): string {
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

export function ffiBindingOfDescription(description: FunctionDef): Signature {
  return [
    ffiTypeOfReturn(description.return),
    description.params.map(({ type }) => ffiTypeOfParam(type)),
  ]
}

export function ffiBindingOfDescriptions(
  descriptions: Record<string, FunctionDef>,
): Record<string, Signature> {
  const bindings: Record<string, Signature> = {}
  for (const functionName in descriptions) {
    bindings[functionName] = ffiBindingOfDescription(descriptions[functionName])
  }
  return bindings
}
