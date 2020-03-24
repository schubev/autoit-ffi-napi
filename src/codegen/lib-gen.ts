import { FunctionDef, Return, Param } from './function-defs'

function tsTypeOfReturnType(returnType: Return): 'void' | 'number' {
  switch (returnType) {
    case Return.Void:
      return 'void'
    case Return.Int:
    case Return.IntStatus:
    case Return.IntCursor:
    case Return.Hwnd:
      return 'number'
  }
}

function tsTypeOfParamType(paramType: Param): 'number' | 'Buffer' {
  switch (paramType) {
    case Param.Int:
    case Param.IntSendMode:
    case Param.Hwnd:
    case Param.OutWstrSize:
      return 'number'
    case Param.InWstr:
    case Param.InWstrCommand:
    case Param.InWstrCommandExtra:
    case Param.InWstrDescription:
    case Param.InWstrMouseButton:
    case Param.OutWstr:
    case Param.OutRectangle:
      return 'Buffer'
  }
}

function libFunctionType(name: string, functionDef: FunctionDef): string {
  const returnType = tsTypeOfReturnType(functionDef.return)
  const params = functionDef.params.map(
    ({ key, type }) => `${key}: ${tsTypeOfParamType(type)}`,
  )
  params.push(`callback: (error: any, result: ${returnType}) => void`)
  return `${name}: { async(${params.join(', ')}): void }`
}

function libPromisifiedFunctionType(
  name: string,
  functionDef: FunctionDef,
): string {
  const returnType = tsTypeOfReturnType(functionDef.return)
  const params = functionDef.params.map(
    ({ key, type }) => `${key}: ${tsTypeOfParamType(type)}`,
  )
  return `${name}(${params.join(', ')}): Promise<${returnType}>`
}

export function generatePromisifiedLibInterface(
  functions: Record<string, FunctionDef>,
): string {
  const definitions = []
  for (const functionName in functions) {
    definitions.push(
      libPromisifiedFunctionType(functionName, functions[functionName]),
    )
  }
  return `export interface PromisifiedAutoitLib {
    ${definitions.join('\n')}
  }`
}

export function generateLibInterface(
  functions: Record<string, FunctionDef>,
): string {
  const definitions = []
  for (const functionName in functions) {
    definitions.push(libFunctionType(functionName, functions[functionName]))
  }
  return `export interface AutoitLib {
    ${definitions.join('\n')}
  }`
}
