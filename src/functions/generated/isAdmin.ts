// This file is generated by src/codegen/function-gen.ts.
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_IsAdmin = promisify(lib.AU3_IsAdmin.async)

export async function isAdmin(): Promise<number> {
  return AU3_IsAdmin()
}
