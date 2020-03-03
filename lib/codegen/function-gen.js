import { Param, Return } from './function-defs';
export function makePrettyFunctionName(functionName) {
    if (functionName === 'AU3_AutoItSetOption')
        return 'autoitSetOption';
    const match = /^AU3_(\w)(\w+)$/.exec(functionName);
    if (match === null)
        throw Error(`failed to get pretty name for ${functionName}`);
    return match[1].toLowerCase() + match[2];
}
export function makeLowlevelArgsSection(paramDefs) {
    if (paramDefs.length === 0)
        return '';
    const params = [];
    for (const paramDef of paramDefs) {
        switch (paramDef.type) {
            case Param.OutWstr:
                params.push('outBuffer');
                break;
            case Param.InWstr:
            case Param.InWstrMouseButton:
            case Param.InWstrDescription:
                params.push(`${paramDef.key}Buffer`);
                break;
            default:
                params.push(paramDef.key);
                break;
        }
    }
    params.push('');
    return params.join(', ');
}
export function makeResolverSection(functionDef) {
    if (functionDef.params.some(param => param.type === Param.OutWstr)) {
        return 'outWstrResolver(outBuffer, resolve)';
    }
    else if (functionDef.return === Return.IntStatus) {
        return '(status: 0 | 1) => { resolve(status === 1) }';
    }
    else {
        return 'resolve';
    }
}
class ImportSet {
    constructor() {
        this.imports = {};
    }
    add(modulePath, ...members) {
        if (members.length === 0)
            return;
        if (!(modulePath in this.imports))
            this.imports[modulePath] = new Set();
        for (const member of members) {
            this.imports[modulePath].add(member);
        }
    }
    toSource() {
        const lines = [];
        for (const modulePath in this.imports) {
            const members = Array.from(this.imports[modulePath])
                .sort()
                .join(', ');
            lines.push(`import { ${members} } from '${modulePath}'`);
        }
        lines.sort();
        if (lines.length > 0)
            lines.push('', '');
        return lines.join('\n');
    }
}
export function generateFunction(functionName, functionDef) {
    const imports = new ImportSet();
    const prettyFunctionName = makePrettyFunctionName(functionName);
    let returnAssignSection;
    let returnSection;
    let returnTypeSection;
    const transformsSection = [];
    const paramsSection = [];
    const lowlevelArgsSection = [];
    imports.add('util', 'promisify');
    imports.add('../../lowlevel', 'lib');
    switch (functionDef.return) {
        case Return.Void:
            returnAssignSection = 'await ';
            returnSection = '';
            returnTypeSection = 'void';
            break;
        case Return.Int:
            returnAssignSection = 'return ';
            returnSection = '';
            returnTypeSection = 'number';
            break;
        case Return.IntCursor:
            imports.add('../../types', 'Cursor');
            returnAssignSection = 'return ';
            returnSection = '';
            returnTypeSection = 'Cursor';
            break;
        case Return.IntStatus:
            returnAssignSection = 'const result = await ';
            returnSection = 'return result !== 0';
            returnTypeSection = 'boolean';
            break;
        case Return.Hwnd:
            imports.add('../../types', 'Hwnd');
            returnAssignSection = 'const result = await ';
            returnSection = 'return result === 0 ? null : Hwnd.ofNumber(result)';
            returnTypeSection = 'Hwnd | null';
            break;
        default:
            throw Error(`return type ${functionDef.return} is not implemented`);
    }
    function addParam(name, type, defaultValue) {
        let paramString;
        if (defaultValue != null) {
            paramString = `${name} = ${defaultValue}`;
        }
        else {
            paramString = `${name}: ${type}`;
        }
        paramsSection.push(paramString);
    }
    for (const paramDef of functionDef.params) {
        const varName = paramDef.key;
        switch (paramDef.type) {
            case Param.Int:
                addParam(varName, 'number', paramDef.default);
                lowlevelArgsSection.push(varName);
                break;
            case Param.SendMode:
                imports.add('../../types', 'SendMode');
                addParam(varName, 'SendMode', paramDef.default);
                lowlevelArgsSection.push(varName);
                break;
            case Param.InWstr: {
                imports.add('../../wrap-utils', 'inWstrOfString');
                const bufName = `${varName}Buffer`;
                addParam(varName, 'string', paramDef.default);
                transformsSection.push(`const ${bufName} = inWstrOfString(${varName})`);
                lowlevelArgsSection.push(bufName);
                break;
            }
            case Param.InWstrDescription: {
                imports.add('../../wrap-utils', 'inWstrOfWindowDescription');
                imports.add('autoit-advanced-descriptor', 'WindowDescription');
                const bufName = `${varName}Buffer`;
                addParam(varName, 'WindowDescription', paramDef.default);
                transformsSection.push(`const ${bufName} = inWstrOfWindowDescription(${varName})`);
                lowlevelArgsSection.push(bufName);
                break;
            }
            case Param.InWstrMouseButton: {
                imports.add('../../wrap-utils', 'inWstrOfString');
                imports.add('../../types', 'MouseButton');
                const bufName = `${varName}Buffer`;
                addParam(varName, 'MouseButton', paramDef.default);
                transformsSection.push(`const ${bufName} = inWstrOfString(${varName})`);
                lowlevelArgsSection.push(bufName);
                break;
            }
            case Param.OutWstr:
                imports.add('../../wrap-utils', 'outWstrOfSize', 'stringOfOutWstr');
                transformsSection.push(`const outBuffer = outWstrOfSize(${varName}Size)`);
                lowlevelArgsSection.push(`outBuffer`);
                returnAssignSection = 'await ';
                returnSection = 'return stringOfOutWstr(outBuffer)';
                returnTypeSection = 'string';
                break;
            case Param.OutWstrSize:
                paramsSection.push(`${varName} = 512`);
                lowlevelArgsSection.push(`${varName}`);
                break;
            case Param.Hwnd:
                imports.add('../../types', 'Hwnd');
                paramsSection.push(`${varName}: Hwnd`);
                lowlevelArgsSection.push(`${varName}.toNumber()`);
                break;
            default:
                throw Error(`param type ${paramDef.type} is not implemented`);
        }
    }
    return `// This file is generated by src/codegen/function-gen.ts.
${imports.toSource()}const ${functionName} = promisify(lib.${functionName}.async)

export async function ${prettyFunctionName}(${paramsSection.join(', ')}): Promise<${returnTypeSection}> {
${transformsSection.map(l => '  ' + l).join('\n')}
  ${returnAssignSection}${functionName}(${lowlevelArgsSection.join(', ')})
  ${returnSection}
}`;
}