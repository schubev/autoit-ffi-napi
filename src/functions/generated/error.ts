// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function error(
  library?: Pick<PromisifiedAutoitLib, 'AU3_error'>,
): Promise<number> {
  const lib = library ?? (await import('../../default-lib')).lib
  return lib.AU3_error()
}
