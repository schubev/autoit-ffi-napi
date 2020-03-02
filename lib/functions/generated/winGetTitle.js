import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, stringOfOutWstr, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinGetTitle = promisify(lib.AU3_WinGetTitle.async);
export async function winGetTitle(windowDescription, windowText, titleSize = 512) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const outBuffer = outWstrOfSize(titleSize);
    await AU3_WinGetTitle(windowDescriptionBuffer, windowTextBuffer, outBuffer, titleSize);
    return stringOfOutWstr(outBuffer);
}
