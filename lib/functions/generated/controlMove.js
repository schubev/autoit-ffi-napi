import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlMove = promisify(lib.AU3_ControlMove.async);
export async function controlMove(windowDescription, windowText, controlDescription, nX, nY, nWidth = -1, nHeight = -1) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    return AU3_ControlMove(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, nX, nY, nWidth, nHeight);
}
