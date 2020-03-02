import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlDisable = promisify(lib.AU3_ControlDisable.async);
export async function controlDisable(windowDescription, windowText, controlDescription) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    return AU3_ControlDisable(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer);
}
