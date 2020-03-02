import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlSend = promisify(lib.AU3_ControlSend.async);
export async function controlSend(windowDescription, windowText, controlDescription, text, mode) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const textBuffer = inWstrOfString(text);
    return AU3_ControlSend(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer, mode);
}
