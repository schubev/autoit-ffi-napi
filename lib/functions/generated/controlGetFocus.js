import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, stringOfOutWstr, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlGetFocus = promisify(lib.AU3_ControlGetFocus.async);
export async function controlGetFocus(windowDescription, windowText, controlSize = 512) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const outBuffer = outWstrOfSize(controlSize);
    await AU3_ControlGetFocus(windowDescriptionBuffer, windowTextBuffer, outBuffer, controlSize);
    return stringOfOutWstr(outBuffer);
}
