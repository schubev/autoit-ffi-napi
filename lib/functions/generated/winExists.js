import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinExists = promisify(lib.AU3_WinExists.async);
export async function winExists(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const result = await AU3_WinExists(windowDescriptionBuffer, windowTextBuffer);
    return result === 1;
}
