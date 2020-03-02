// This file is generated by src/codegen/function-gen.ts.
import { Cursor } from '../../types'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_MouseGetCursor = promisify(lib.AU3_MouseGetCursor.async)

export async function mouseGetCursor(): Promise<Cursor> {
  return AU3_MouseGetCursor()
}
