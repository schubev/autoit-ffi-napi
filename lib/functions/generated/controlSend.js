import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlSend(windowDescription, windowText, controlDescription, text, mode) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const textBuffer = inWstrOfString(text);
    return new Promise(resolve => {
        lib.AU3_ControlSend.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer, mode, resolve);
    });
}
