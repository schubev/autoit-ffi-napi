// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types';
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinActive = promisify(lib.AU3_WinActive.async);
export async function winActive(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinActive(windowDescriptionBuffer, windowTextBuffer);
    return result === 0 ? null : Hwnd.ofNumber(result);
}