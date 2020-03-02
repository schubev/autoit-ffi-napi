import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlSetText = promisify(lib.AU3_ControlSetText.async);
export async function controlSetText(windowDescription, windowText, controlDescription, text) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const textBuffer = inWstrOfString(text);
    return AU3_ControlSetText(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer);
}
