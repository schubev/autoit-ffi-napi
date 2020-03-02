import { FunctionDef, ParamDef } from './function-defs';
export declare function makePrettyFunctionName(functionName: string): string;
export declare function makeParamsSection(paramDefs: ParamDef[]): string;
export declare function makeLowlevelArgsSection(paramDefs: ParamDef[]): string;
export declare function makeTransformSection(paramDefs: ParamDef[]): string;
export declare function makeResolverSection(functionDef: FunctionDef): string;
export declare function makeImportsSection(functionDef: FunctionDef): string;
export declare function generateFunction(functionName: string, functionDef: FunctionDef): string;
