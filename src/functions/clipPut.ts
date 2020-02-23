import { lib } from '../lowlevel'
import { inWstrOfString } from '../wrap-utils'

export async function clipPut(clip: string): Promise<boolean> {
  const clipBuffer = inWstrOfString(clip)
  return new Promise(resolve => {
    lib.AU3_ClipPut(clipBuffer, (status: 0 | 1) => {
      resolve(Boolean(status))
    })
  })
}
