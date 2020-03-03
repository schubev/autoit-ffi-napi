// This file is generated by src/codegen/function-gen.ts.
import { lib } from '../../lowlevel';
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_ClipGet = promisify(lib.AU3_ClipGet.async);
export async function clipGet(clipSize = 512) {
    const outBuffer = outWstrOfSize(clipSize);
    await AU3_ClipGet(outBuffer, clipSize);
    return stringOfOutWstr(outBuffer);
}