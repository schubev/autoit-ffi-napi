import { FunctionDef, ParamDef, Param, Return } from './function-defs'

export function makePrettyFunctionName(functionName: string): string {
  if (functionName === 'AU3_AutoItSetOption') return 'autoitSetOption'
  const match = /^AU3_(\w)(\w+)$/.exec(functionName)
  if (match === null)
    throw Error(`failed to get pretty name for ${functionName}`)
  return match[1].toLowerCase() + match[2]
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

class ImportSet {
  imports: Record<string, Set<string>> = {}

  add(modulePath: string, ...members: string[]): void {
    if (members.length === 0) return
    if (!(modulePath in this.imports)) this.imports[modulePath] = new Set()
    for (const member of members) {
      this.imports[modulePath].add(member)
    }
  }

  toSource(): string {
    const lines = []
    for (const modulePath in this.imports) {
      const members = Array.from(this.imports[modulePath])
        .sort()
        .join(', ')
      lines.push(`import { ${members} } from '${modulePath}'`)
    }
    lines.sort()
    if (lines.length > 0) lines.push('', '')
    return lines.join('\n')
  }
}

export function generateFunction(
  functionName: string,
  functionDef: FunctionDef,
): string {
  const imports = new ImportSet()
  const prettyFunctionName = makePrettyFunctionName(functionName)

  let returnAssignSection: string
  let returnSection: string
  let returnTypeSection: string
  const transformsSection: string[] = []
  const paramsSection: string[] = []
  const lowlevelArgsSection: string[] = []

  switch (functionDef.return) {
    case Return.Void:
      returnAssignSection = 'await '
      returnSection = ''
      returnTypeSection = 'void'
      break
    case Return.Int:
      returnAssignSection = 'return '
      returnSection = ''
      returnTypeSection = 'number'
      break
    case Return.IntCursor:
      imports.add('../../types', 'Cursor')
      returnAssignSection = 'return '
      returnSection = ''
      returnTypeSection = 'Cursor'
      break
    case Return.IntStatus:
      returnAssignSection = 'const result = await '
      returnSection = 'return result !== 0'
      returnTypeSection = 'boolean'
      break
    case Return.IntDiscard:
      returnAssignSection = 'await '
      returnSection = ''
      returnTypeSection = 'void'
      break
    case Return.Hwnd:
      imports.add('../../types', 'Hwnd')
      returnAssignSection = 'const result = await '
      returnSection = 'return result === 0 ? null : Hwnd.ofNumber(result)'
      returnTypeSection = 'Hwnd | null'
      break
    default:
      throw Error(`return type ${functionDef.return} is not implemented`)
  }

  function addParam(
    name: string,
    type: string,
    defaultValue?: string | number,
  ): void {
    let paramString: string
    if (defaultValue === 'undefined') {
      paramString = `${name}?: ${type}`
    } else if (defaultValue != null) {
      paramString = `${name} = ${defaultValue}`
    } else {
      paramString = `${name}: ${type}`
    }
    paramsSection.push(paramString)
  }

  for (const paramDef of functionDef.params) {
    const varName = paramDef.key
    switch (paramDef.type) {
      case Param.Int:
        addParam(varName, 'number', paramDef.default)
        lowlevelArgsSection.push(varName)
        break
      case Param.IntSendMode:
        imports.add('../../types', 'SendMode')
        addParam(varName, 'SendMode', paramDef.default)
        lowlevelArgsSection.push(varName)
        break
      case Param.InWstr: {
        imports.add('../../wrap-utils', 'inWstrOfString')
        const bufName = `${varName}Buffer`
        addParam(varName, 'string', paramDef.default)
        transformsSection.push(`const ${bufName} = inWstrOfString(${varName})`)
        lowlevelArgsSection.push(bufName)
        break
      }
      case Param.InWstrDescription: {
        imports.add('../../wrap-utils', 'inWstrOfWindowDescription')
        imports.add('autoit-advanced-descriptor', 'WindowDescription')
        const bufName = `${varName}Buffer`
        addParam(varName, 'WindowDescription', paramDef.default)
        transformsSection.push(
          `const ${bufName} = inWstrOfWindowDescription(${varName})`,
        )
        lowlevelArgsSection.push(bufName)
        break
      }
      case Param.InWstrMouseButton: {
        imports.add('../../wrap-utils', 'inWstrOfString')
        imports.add('../../types', 'MouseButton')
        const bufName = `${varName}Buffer`
        addParam(varName, 'MouseButton', paramDef.default)
        transformsSection.push(`const ${bufName} = inWstrOfString(${varName})`)
        lowlevelArgsSection.push(bufName)
        break
      }
      case Param.OutWstr:
        imports.add('../../wrap-utils', 'outWstrOfSize', 'stringOfOutWstr')
        transformsSection.push(
          `const outBuffer = outWstrOfSize(${varName}Size)`,
        )
        lowlevelArgsSection.push('outBuffer')
        returnAssignSection = 'await '
        returnSection = 'return stringOfOutWstr(outBuffer)'
        returnTypeSection = 'string'
        break
      case Param.OutWstrSize:
        addParam(varName, 'number', 512)
        lowlevelArgsSection.push(`${varName}`)
        break
      case Param.OutRectangle:
        imports.add(
          '../../wrap-utils',
          'outRectangleBuffer',
          'rectangleOfRectangleBuffer',
        )
        imports.add('../../types', 'Rectangle')
        transformsSection.push(
          'const rectangleBuffer = await outRectangleBuffer()',
        )
        lowlevelArgsSection.push('rectangleBuffer')
        returnAssignSection = 'const result = await '
        returnSection =
          'return result ? await rectangleOfRectangleBuffer(rectangleBuffer) : null'
        returnTypeSection = 'Rectangle | null'
        break
      case Param.Hwnd:
        imports.add('../../types', 'Hwnd')
        addParam(varName, 'Hwnd')
        lowlevelArgsSection.push(`${varName}.toNumber()`)
        break
      default:
        throw Error(`param type ${paramDef.type} is not implemented`)
    }
  }

  imports.add('../../generated-lib-type', 'PromisifiedAutoitLib')
  addParam(
    'library',
    `Pick<PromisifiedAutoitLib, '${functionName}'>`,
    'undefined',
  )

  return `// This file is generated by src/codegen/function-gen.ts.
${imports.toSource()}export async function ${prettyFunctionName}(${paramsSection.join(
    ', ',
  )}): Promise<${returnTypeSection}> {
${transformsSection.map(l => '  ' + l).join('\n')}
  const lib = library ?? (await import('../../default-lib')).lib
  ${returnAssignSection}lib.${functionName}(${lowlevelArgsSection.join(', ')})
  ${returnSection}
}`
}
