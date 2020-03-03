import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWait = promisify(lib.AU3_WinWait.async);
export async function winWait(windowDescription, windowText, timeoutSeconds = 0) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinWait(windowDescriptionBuffer, windowTextBuffer, timeoutSeconds);
    return result !== 0;
}
