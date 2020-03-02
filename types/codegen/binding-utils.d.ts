import { Param, Return, FunctionDef } from './function-defs';
declare type Signature = [string, string[]];
export declare function ffiTypeOfReturn(returnType: Return): string;
export declare function ffiTypeOfParam(paramType: Param): string;
export declare function ffiBindingOfDescription(description: FunctionDef): Signature;
export declare function ffiBindingOfDescriptions(descriptions: Record<string, FunctionDef>): Record<string, Signature>;
export declare function ffiBindingSourceOfDescriptions(descriptions: Record<string, FunctionDef>): string;
export {};
