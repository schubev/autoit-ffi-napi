// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function winMinimizeAllUndo(
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinMinimizeAllUndo'>,
): Promise<void> {
  const lib = library ?? (await import('../../default-lib')).lib
  await lib.AU3_WinMinimizeAllUndo()
}
