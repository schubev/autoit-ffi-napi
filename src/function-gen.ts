import { FunctionDef, ParamDef, Param, Return } from './function-defs'

export function makePrettyFunctionName(functionName: string): string {
  if (functionName === 'AU3_AutoItSetOption') return 'autoitSetOption'
  const match = /^AU3_(\w)(\w+)$/.exec(functionName)
  if (match === null)
    throw Error(`failed to get pretty name for ${functionName}`)
  return match[1].toLowerCase() + match[2]
}

function typeOfParamType(param: Param): string {
  switch (param) {
    case Param.Int:
      return 'number'
    case Param.InWstr:
      return 'string'
    case Param.InWstrCommand:
    case Param.InWstrCommandExtra:
      throw Error('not implemented')
    case Param.InWstrDescription:
      return 'string | WindowDescription'
    case Param.InWstrMouseButton:
      return 'MouseButton'
    case Param.OutWstr:
    case Param.OutWstrSize:
    case Param.OutRectangle:
      return 'never'
    case Param.Hwnd:
      return 'Hwnd'
    case Param.SendMode:
      return 'SendMode'
  }
}

function typeOfReturnType(type: Return): string {
  switch (type) {
    case Return.Void:
      return 'void'
    case Return.Int:
      return 'number'
    case Return.Hwnd:
      return 'Hwnd'
  }
}

export function makeParamsSection(paramDefs: ParamDef[]): string {
  const params = []
  for (const paramDef of paramDefs) {
    const name = paramDef.key
    const tsType = typeOfParamType(paramDef.type)
    params.push(`${name}: ${tsType}`)
  }
  return params.join(', ')
}

export function makeLowlevelArgsSection(paramDefs: ParamDef[]): string {
  if (paramDefs.length === 0) return ''
  const params = []
  for (const paramDef of paramDefs) {
    params.push(paramDef.key)
  }
  params.push('')
  return params.join(', ')
}

export function generateFunction(
  functionName: string,
  functionDef: FunctionDef,
): string {
  const prettyFunctionName = makePrettyFunctionName(functionName)
  const paramsSection = makeParamsSection(functionDef.params)
  const transformSection = ''
  const lowlevelArgsSection = makeLowlevelArgsSection(functionDef.params)
  const returnTypeSection = `Promise<${typeOfReturnType(functionDef.return)}>`
  const resolverSection = 'resolve'
  return `async function ${prettyFunctionName}(${paramsSection}): ${returnTypeSection} {
  ${transformSection}return new Promise(resolve => {
    lib.${functionName}.async(${lowlevelArgsSection}${resolverSection})
  })
}`
}
