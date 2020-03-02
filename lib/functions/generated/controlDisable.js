import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlDisable(windowDescription, windowText, controlDescription) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    return new Promise(resolve => {
        lib.AU3_ControlDisable.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, resolve);
    });
}
