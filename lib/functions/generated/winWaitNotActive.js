import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitNotActive = promisify(lib.AU3_WinWaitNotActive.async);
export async function winWaitNotActive(windowDescription, windowText, timeoutSeconds = 0) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinWaitNotActive(windowDescriptionBuffer, windowTextBuffer, timeoutSeconds);
    return result !== 0;
}
