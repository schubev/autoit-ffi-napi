import { inWstrOfString, inWstrOfWindowDescription, outRectangleBuffer, rectangleOfRectangleBuffer, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinGetClientSize = promisify(lib.AU3_WinGetClientSize.async);
export async function winGetClientSize(windowDescription, windowText) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const rectangleBuffer = outRectangleBuffer();
    const result = await AU3_WinGetClientSize(windowDescriptionBuffer, windowTextBuffer, rectangleBuffer);
    return result ? rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
