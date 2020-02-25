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
    case Return.IntStatus:
      return 'boolean'
    case Return.OutWstr:
      return 'string'
  }
}

export function makeParamsSection(paramDefs: ParamDef[]): string {
  const params = []
  for (const paramDef of paramDefs) {
    const name = paramDef.key
    const tsType = typeOfParamType(paramDef.type)
    switch (paramDef.type) {
      case Param.OutWstr:
        break
      case Param.OutWstrSize:
        params.push(`${name} = 512`)
        break
      default: {
        params.push(`${name}: ${tsType}`)
        break
      }
    }
  }
  return params.join(', ')
}

export function makeLowlevelArgsSection(paramDefs: ParamDef[]): string {
  if (paramDefs.length === 0) return ''
  const params = []
  for (const paramDef of paramDefs) {
    switch (paramDef.type) {
      case Param.OutWstr:
        params.push('outBuffer')
        break
      case Param.InWstr:
      case Param.InWstrMouseButton:
      case Param.InWstrDescription:
        params.push(`${paramDef.key}Buffer`)
        break
      default:
        params.push(paramDef.key)
        break
    }
  }
  params.push('')
  return params.join(', ')
}

export function makeTransformSection(paramDefs: ParamDef[]): string {
  const transforms = []
  for (const paramDef of paramDefs) {
    switch (paramDef.type) {
      case Param.OutWstrSize:
        transforms.push(`const outBuffer = outWstrOfSize(${paramDef.key})`)
        break
      case Param.InWstr:
      case Param.InWstrMouseButton:
        transforms.push(
          `const ${paramDef.key}Buffer = inWstrOfString(${paramDef.key})`,
        )
        break
      case Param.InWstrDescription:
        transforms.push(
          `const ${paramDef.key}Buffer = inWstrOfWindowDescription(${paramDef.key})`,
        )
        break
      default:
        break
    }
  }
  if (transforms.length === 0) return ''
  transforms.push('')
  return transforms.join('\n  ')
}

export function makeResolverSection(returnType: Return): string {
  switch (returnType) {
    case Return.IntStatus:
      return '(status: 0 | 1) => { resolve(status === 1) }'
    case Return.OutWstr:
      return 'outWstrResolver(outBuffer, resolve)'
    default:
      return 'resolve'
  }
}

export function generateFunction(
  functionName: string,
  functionDef: FunctionDef,
): string {
  const prettyFunctionName = makePrettyFunctionName(functionName)
  const paramsSection = makeParamsSection(functionDef.params)
  const transformSection = makeTransformSection(functionDef.params)
  const lowlevelArgsSection = makeLowlevelArgsSection(functionDef.params)
  const returnTypeSection = `Promise<${typeOfReturnType(functionDef.return)}>`
  const resolverSection = makeResolverSection(functionDef.return)
  return `async function ${prettyFunctionName}(${paramsSection}): ${returnTypeSection} {
  ${transformSection}return new Promise(resolve => {
    lib.${functionName}.async(${lowlevelArgsSection}${resolverSection})
  })
}`
}

export async function writeFunctions(
  functionDefs: Record<string, FunctionDef>,
) {
  for (const functionName in functionDefs) {
  }
}
