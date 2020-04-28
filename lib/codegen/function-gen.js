"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_defs_1 = require("./function-defs");
function makePrettyFunctionName(functionName) {
    if (functionName === 'AU3_AutoItSetOption')
        return 'autoitSetOption';
    const match = /^AU3_(\w)(\w+)$/.exec(functionName);
    if (match === null)
        throw Error(`failed to get pretty name for ${functionName}`);
    return match[1].toLowerCase() + match[2];
}
exports.makePrettyFunctionName = makePrettyFunctionName;
function makeLowlevelArgsSection(paramDefs) {
    if (paramDefs.length === 0)
        return '';
    const params = [];
    for (const paramDef of paramDefs) {
        switch (paramDef.type) {
            case function_defs_1.Param.OutWstr:
                params.push('outBuffer');
                break;
            case function_defs_1.Param.InWstr:
            case function_defs_1.Param.InWstrMouseButton:
            case function_defs_1.Param.InWstrDescription:
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
exports.makeLowlevelArgsSection = makeLowlevelArgsSection;
function makeResolverSection(functionDef) {
    if (functionDef.params.some(param => param.type === function_defs_1.Param.OutWstr)) {
        return 'outWstrResolver(outBuffer, resolve)';
    }
    else if (functionDef.return === function_defs_1.Return.IntStatus) {
        return '(status: 0 | 1) => { resolve(status === 1) }';
    }
    else {
        return 'resolve';
    }
}
exports.makeResolverSection = makeResolverSection;
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
function generateFunction(functionName, functionDef) {
    const imports = new ImportSet();
    const prettyFunctionName = makePrettyFunctionName(functionName);
    let returnAssignSection;
    let returnSection;
    let returnTypeSection;
    const transformsSection = [];
    const paramsSection = [];
    const lowlevelArgsSection = [];
    switch (functionDef.return) {
        case function_defs_1.Return.Void:
            returnAssignSection = 'await ';
            returnSection = '';
            returnTypeSection = 'void';
            break;
        case function_defs_1.Return.Int:
            returnAssignSection = 'return ';
            returnSection = '';
            returnTypeSection = 'number';
            break;
        case function_defs_1.Return.IntCursor:
            imports.add('../../types', 'Cursor');
            returnAssignSection = 'return ';
            returnSection = '';
            returnTypeSection = 'Cursor';
            break;
        case function_defs_1.Return.IntStatus:
            returnAssignSection = 'const result = await ';
            returnSection = 'return result !== 0';
            returnTypeSection = 'boolean';
            break;
        case function_defs_1.Return.Hwnd:
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
        if (defaultValue === 'undefined') {
            paramString = `${name}?: ${type}`;
        }
        else if (defaultValue != null) {
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
            case function_defs_1.Param.Int:
                addParam(varName, 'number', paramDef.default);
                lowlevelArgsSection.push(varName);
                break;
            case function_defs_1.Param.IntSendMode:
                imports.add('../../types', 'SendMode');
                addParam(varName, 'SendMode', paramDef.default);
                lowlevelArgsSection.push(varName);
                break;
            case function_defs_1.Param.InWstr: {
                imports.add('../../wrap-utils', 'inWstrOfString');
                const bufName = `${varName}Buffer`;
                addParam(varName, 'string', paramDef.default);
                transformsSection.push(`const ${bufName} = inWstrOfString(${varName})`);
                lowlevelArgsSection.push(bufName);
                break;
            }
            case function_defs_1.Param.InWstrDescription: {
                imports.add('../../wrap-utils', 'inWstrOfWindowDescription');
                imports.add('autoit-advanced-descriptor', 'WindowDescription');
                const bufName = `${varName}Buffer`;
                addParam(varName, 'WindowDescription', paramDef.default);
                transformsSection.push(`const ${bufName} = inWstrOfWindowDescription(${varName})`);
                lowlevelArgsSection.push(bufName);
                break;
            }
            case function_defs_1.Param.InWstrMouseButton: {
                imports.add('../../wrap-utils', 'inWstrOfString');
                imports.add('../../types', 'MouseButton');
                const bufName = `${varName}Buffer`;
                addParam(varName, 'MouseButton', paramDef.default);
                transformsSection.push(`const ${bufName} = inWstrOfString(${varName})`);
                lowlevelArgsSection.push(bufName);
                break;
            }
            case function_defs_1.Param.OutWstr:
                imports.add('../../wrap-utils', 'outWstrOfSize', 'stringOfOutWstr');
                transformsSection.push(`const outBuffer = outWstrOfSize(${varName}Size)`);
                lowlevelArgsSection.push('outBuffer');
                returnAssignSection = 'await ';
                returnSection = 'return stringOfOutWstr(outBuffer)';
                returnTypeSection = 'string';
                break;
            case function_defs_1.Param.OutWstrSize:
                addParam(varName, 'number', 512);
                lowlevelArgsSection.push(`${varName}`);
                break;
            case function_defs_1.Param.OutRectangle:
                imports.add('../../wrap-utils', 'outRectangleBuffer', 'rectangleOfRectangleBuffer');
                imports.add('../../types', 'Rectangle');
                transformsSection.push('const rectangleBuffer = await outRectangleBuffer()');
                lowlevelArgsSection.push('rectangleBuffer');
                returnAssignSection = 'const result = await ';
                returnSection =
                    'return result ? await rectangleOfRectangleBuffer(rectangleBuffer) : null';
                returnTypeSection = 'Rectangle | null';
                break;
            case function_defs_1.Param.Hwnd:
                imports.add('../../types', 'Hwnd');
                addParam(varName, 'Hwnd');
                lowlevelArgsSection.push(`${varName}.toNumber()`);
                break;
            default:
                throw Error(`param type ${paramDef.type} is not implemented`);
        }
    }
    imports.add('../../generated-lib-type', 'PromisifiedAutoitLib');
    addParam('library', `Pick<PromisifiedAutoitLib, '${functionName}'>`, 'undefined');
    return `// This file is generated by src/codegen/function-gen.ts.
${imports.toSource()}export async function ${prettyFunctionName}(${paramsSection.join(', ')}): Promise<${returnTypeSection}> {
${transformsSection.map(l => '  ' + l).join('\n')}
  const lib = library ?? (await import('../../default-lib')).lib
  ${returnAssignSection}lib.${functionName}(${lowlevelArgsSection.join(', ')})
  ${returnSection}
}`;
}
exports.generateFunction = generateFunction;
