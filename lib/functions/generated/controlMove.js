import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlMove(windowDescription, windowText, controlDescription, nX, nY, nWidth, nHeight) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    return new Promise(resolve => {
        lib.AU3_ControlMove.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, nX, nY, nWidth, nHeight, resolve);
    });
}
