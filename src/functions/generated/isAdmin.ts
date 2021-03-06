// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function isAdmin(
  library?: Pick<PromisifiedAutoitLib, 'AU3_IsAdmin'>,
): Promise<boolean> {
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_IsAdmin()
  return result !== 0
}
