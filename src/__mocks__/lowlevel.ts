import { functions } from '../codegen/function-defs'

export const lib: Record<string, any> = {}

for (const functionName in functions) {
  lib[functionName] = { async: jest.fn().mockName(functionName) }
}
