import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlGetPos(windowDescription, windowText, controlDescription, rectangle) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    return new Promise(resolve => {
        lib.AU3_ControlGetPos.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, rectangle, resolve);
    });
}
