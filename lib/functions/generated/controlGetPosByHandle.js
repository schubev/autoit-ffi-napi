import { lib } from '../../lowlevel';
import { outRectangleBuffer, rectangleOfRectangleBuffer, } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_ControlGetPosByHandle = promisify(lib.AU3_ControlGetPosByHandle.async);
export async function controlGetPosByHandle(window, control) {
    const rectangleBuffer = outRectangleBuffer();
    const result = await AU3_ControlGetPosByHandle(window.toNumber(), control.toNumber(), rectangleBuffer);
    return result ? rectangleOfRectangleBuffer(rectangleBuffer) : null;
}
