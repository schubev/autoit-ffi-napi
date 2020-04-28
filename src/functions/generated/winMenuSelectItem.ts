// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'

export async function winMenuSelectItem(
  windowDescription: WindowDescription,
  windowText: string,
  item0 = '',
  item1 = '',
  item2 = '',
  item3 = '',
  item4 = '',
  item5 = '',
  item6 = '',
  item7 = '',
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinMenuSelectItem'>,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const item0Buffer = inWstrOfString(item0)
  const item1Buffer = inWstrOfString(item1)
  const item2Buffer = inWstrOfString(item2)
  const item3Buffer = inWstrOfString(item3)
  const item4Buffer = inWstrOfString(item4)
  const item5Buffer = inWstrOfString(item5)
  const item6Buffer = inWstrOfString(item6)
  const item7Buffer = inWstrOfString(item7)
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinMenuSelectItem(
    windowDescriptionBuffer,
    windowTextBuffer,
    item0Buffer,
    item1Buffer,
    item2Buffer,
    item3Buffer,
    item4Buffer,
    item5Buffer,
    item6Buffer,
    item7Buffer,
  )
  return result !== 0
}
