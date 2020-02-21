import { FunctionDef } from './functions'

export function makePrettyFunctionName(functionName: string): string {
  if (functionName === 'AU3_AutoItSetOption') return 'autoitSetOption'
  const match = /^AU3_(\w)(\w+)$/.exec(functionName)
  if (match === null)
    throw Error(`failed to get pretty name for ${functionName}`)
  return match[1].toLowerCase() + match[2]
}
/*
export function generateFunction(
  functionName: string,
  functionDef: FunctionDef,
): string {
  const prettyFunctionName = makePrettyFunctionName(functionName)
  return `function ${prettyFunctionName}() {}`
}
*/
