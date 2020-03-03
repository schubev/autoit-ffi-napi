import { inWstrOfString, inWstrOfWindowDescription, outRectangleBuffer, rectangleOfRectangleBuffer, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinGetPos = promisify(lib.AU3_WinGetPos.async);
export async function winGetPos(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const rectangleBuffer = outRectangleBuffer();
    const result = await AU3_WinGetPos(windowDescriptionBuffer, windowTextBuffer, rectangleBuffer);
    return result ? rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
