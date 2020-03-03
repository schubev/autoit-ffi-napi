import { inWstrOfString, inWstrOfWindowDescription, outRectangleBuffer, rectangleOfRectangleBuffer, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlGetPos = promisify(lib.AU3_ControlGetPos.async);
export async function controlGetPos(windowDescription, windowText, controlDescription) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const rectangleBuffer = outRectangleBuffer();
    const result = await AU3_ControlGetPos(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, rectangleBuffer);
    return result ? rectangleOfRectangleBuffer(rectangleBuffer) : null;
}