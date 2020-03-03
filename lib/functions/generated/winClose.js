import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinClose = promisify(lib.AU3_WinClose.async);
export async function winClose(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinClose(windowDescriptionBuffer, windowTextBuffer);
    return result !== 0;
}
