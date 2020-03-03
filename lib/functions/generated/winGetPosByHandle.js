import { lib } from '../../lowlevel';
import { outRectangleBuffer, rectangleOfRectangleBuffer, } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_WinGetPosByHandle = promisify(lib.AU3_WinGetPosByHandle.async);
export async function winGetPosByHandle(window) {
    const rectangleBuffer = outRectangleBuffer();
    const result = await AU3_WinGetPosByHandle(window.toNumber(), rectangleBuffer);
    return result ? rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
