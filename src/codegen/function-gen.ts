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

export function makeImportsSection(functionDef: FunctionDef): string {
  const wrapUtils = '../../wrap-utils'
  const types = '../../types'
  const imports: Record<string, Set<string>> = {}
  function addImport(moduleName: string, ...members: string[]): void {
    if (!(moduleName in imports)) imports[moduleName] = new Set()
    members.forEach(member => {
      imports[moduleName].add(member)
    })
  }
  addImport('../../lowlevel', 'lib')
  for (const paramDef of functionDef.params) {
    switch (paramDef.type) {
      case Param.OutWstrSize:
        addImport(wrapUtils, 'outWstrOfSize')
        break
      case Param.InWstrMouseButton:
        addImport(types, 'MouseButton')
        addImport(wrapUtils, 'inWstrOfString')
        break
      case Param.InWstrDescription:
        addImport('autoit-advanced-descriptor', 'WindowDescription')
        addImport(wrapUtils, 'inWstrOfWindowDescription')
        break
      case Param.InWstr:
        addImport(wrapUtils, 'inWstrOfString')
        break
      case Param.Hwnd:
        addImport(types, 'Hwnd')
        break
      case Param.SendMode:
        addImport(types, 'SendMode')
        break
    }
  }
  switch (functionDef.return) {
    case Return.OutWstr:
      addImport(wrapUtils, 'outWstrResolver')
      break
    case Return.Hwnd:
      addImport(types, 'Hwnd')
      break
  }
  const importStrings: string[] = []
  for (const moduleName in imports) {
    importStrings.push(
      `import { ${Array.from(imports[moduleName])
        .sort()
        .join(', ')} } from '${moduleName}'`,
    )
  }
  importStrings.sort()
  if (importStrings.length > 0) importStrings.push('', '')
  return importStrings.join('\n')
}

export function generateFunction(
  functionName: string,
  functionDef: FunctionDef,
): string {
  const importsSection = makeImportsSection(functionDef)
  const prettyFunctionName = makePrettyFunctionName(functionName)
  const paramsSection = makeParamsSection(functionDef.params)
  const transformSection = makeTransformSection(functionDef.params)
  const lowlevelArgsSection = makeLowlevelArgsSection(functionDef.params)
  const returnTypeSection = `Promise<${typeOfReturnType(functionDef.return)}>`
  const resolverSection = makeResolverSection(functionDef.return)
  return `// This file is generated by src/codegen/function-gen.ts.
${importsSection}async function ${prettyFunctionName}(${paramsSection}): ${returnTypeSection} {
  ${transformSection}return new Promise(resolve => {
    lib.${functionName}.async(${lowlevelArgsSection}${resolverSection})
  })
}`
}
