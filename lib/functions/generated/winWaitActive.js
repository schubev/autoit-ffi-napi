import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitActive = promisify(lib.AU3_WinWaitActive.async);
export async function winWaitActive(windowDescription, windowText, timeoutSeconds = 0) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinWaitActive(windowDescriptionBuffer, windowTextBuffer, timeoutSeconds);
    return result !== 0;
}
