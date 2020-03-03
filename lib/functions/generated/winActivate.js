import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinActivate = promisify(lib.AU3_WinActivate.async);
export async function winActivate(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinActivate(windowDescriptionBuffer, windowTextBuffer);
    return result !== 0;
}
