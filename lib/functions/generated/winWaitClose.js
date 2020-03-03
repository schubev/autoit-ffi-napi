import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitClose = promisify(lib.AU3_WinWaitClose.async);
export async function winWaitClose(windowDescription, windowText, timeoutSeconds = 0) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinWaitClose(windowDescriptionBuffer, windowTextBuffer, timeoutSeconds);
    return result !== 0;
}
