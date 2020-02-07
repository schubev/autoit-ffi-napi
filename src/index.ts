import { inWstrOfString, stringOfOutWstr } from './wrap-utils'
import { lib } from './lowlevel'

export function clipPut(clip: string): Promise<void> {
  return new Promise(resolve => {
    const clipBuffer = inWstrOfString(clip)
    lib.AU3_ClipPut.async(clipBuffer, resolve)
  })
}

export function clipGet(clipSize = 0x200): Promise<string> {
  return new Promise(resolve => {
    const clipBuffer = Buffer.alloc(clipSize * 2)
    lib.AU3_ClipGet.async(clipBuffer, clipSize, () => {
      resolve(stringOfOutWstr(clipBuffer))
    })
  })
}
