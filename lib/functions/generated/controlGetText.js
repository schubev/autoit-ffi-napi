import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, stringOfOutWstr, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlGetText = promisify(lib.AU3_ControlGetText.async);
export async function controlGetText(windowDescription, windowText, controlDescription, controlTextSize = 512) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const outBuffer = outWstrOfSize(controlTextSize);
    await AU3_ControlGetText(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, outBuffer, controlTextSize);
    return stringOfOutWstr(outBuffer);
}
