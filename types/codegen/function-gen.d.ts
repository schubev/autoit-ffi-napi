import { FunctionDef, ParamDef } from './function-defs';
export declare function makePrettyFunctionName(functionName: string): string;
export declare function makeLowlevelArgsSection(paramDefs: ParamDef[]): string;
export declare function generateFunction(functionName: string, functionDef: FunctionDef): string;
