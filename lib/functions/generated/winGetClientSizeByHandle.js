import { lib } from '../../lowlevel';
import { outRectangleBuffer, rectangleOfRectangleBuffer, } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_WinGetClientSizeByHandle = promisify(lib.AU3_WinGetClientSizeByHandle.async);
export async function winGetClientSizeByHandle(window) {
    const rectangleBuffer = outRectangleBuffer();
    const result = await AU3_WinGetClientSizeByHandle(window.toNumber(), rectangleBuffer);
    return result ? rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
