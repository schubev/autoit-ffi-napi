// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils'

export async function clipGet(
  clipSize = 512,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ClipGet'>,
): Promise<string> {
  const outBuffer = outWstrOfSize(clipSize)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_ClipGet(outBuffer, clipSize)
  return stringOfOutWstr(outBuffer)
}
