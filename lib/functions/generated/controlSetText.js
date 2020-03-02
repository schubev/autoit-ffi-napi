import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlSetText(windowDescription, windowText, controlDescription, text) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const textBuffer = inWstrOfString(text);
    return new Promise(resolve => {
        lib.AU3_ControlSetText.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, textBuffer, resolve);
    });
}
