// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { inWstrOfString } from '../../wrap-utils'

export async function winMenuSelectItemByHandle(
  window: Hwnd,
  item0 = '',
  item1 = '',
  item2 = '',
  item3 = '',
  item4 = '',
  item5 = '',
  item6 = '',
  item7 = '',
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinMenuSelectItemByHandle'>,
): Promise<number> {
  const item0Buffer = inWstrOfString(item0)
  const item1Buffer = inWstrOfString(item1)
  const item2Buffer = inWstrOfString(item2)
  const item3Buffer = inWstrOfString(item3)
  const item4Buffer = inWstrOfString(item4)
  const item5Buffer = inWstrOfString(item5)
  const item6Buffer = inWstrOfString(item6)
  const item7Buffer = inWstrOfString(item7)
  const lib = library ?? (await import('../../default-lib')).lib
  return lib.AU3_WinMenuSelectItemByHandle(
    window.toNumber(),
    item0Buffer,
    item1Buffer,
    item2Buffer,
    item3Buffer,
    item4Buffer,
    item5Buffer,
    item6Buffer,
    item7Buffer,
  )
}
