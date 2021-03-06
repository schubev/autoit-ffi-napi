// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { inWstrOfString } from '../../wrap-utils'

export async function clipPut(
  clip: string,
  library?: Pick<PromisifiedAutoitLib, 'AU3_ClipPut'>,
): Promise<void> {
  const clipBuffer = inWstrOfString(clip)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_ClipPut(clipBuffer)
}
