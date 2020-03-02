import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlClick(windowDescription, windowText, controlDescription, button, numClicks, nX, nY) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const buttonBuffer = inWstrOfString(button);
    return new Promise(resolve => {
        lib.AU3_ControlClick.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, buttonBuffer, numClicks, nX, nY, (status) => {
            resolve(status === 1);
        });
    });
}
