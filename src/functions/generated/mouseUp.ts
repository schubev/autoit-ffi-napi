// This file is generated by src/codegen/function-gen.ts.
import { MouseButton } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { inWstrOfString } from '../../wrap-utils'

export async function mouseUp(
  button = MouseButton.Primary,
  library?: Pick<PromisifiedAutoitLib, 'AU3_MouseUp'>,
): Promise<void> {
  const buttonBuffer = inWstrOfString(button)
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_MouseUp(buttonBuffer)
}
