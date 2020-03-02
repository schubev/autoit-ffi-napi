import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlClick = promisify(lib.AU3_ControlClick.async);
export async function controlClick(windowDescription, windowText, controlDescription, button, numClicks, nX = -2147483647, nY = -2147483647) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const buttonBuffer = inWstrOfString(button);
    const result = await AU3_ControlClick(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, buttonBuffer, numClicks, nX, nY);
    return result === 1;
}
