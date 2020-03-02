import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function winGetHandle(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    return new Promise(resolve => {
        lib.AU3_WinGetHandle.async(windowDescriptionBuffer, windowTextBuffer, resolve);
    });
}
