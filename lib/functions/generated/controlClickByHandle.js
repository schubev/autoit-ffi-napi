import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlClickByHandle = promisify(lib.AU3_ControlClickByHandle.async);
export async function controlClickByHandle(window, control, button, numClicks, nX = -2147483647, nY = -2147483647) {
    const buttonBuffer = inWstrOfString(button);
    return AU3_ControlClickByHandle(window.toNumber(), control.toNumber(), buttonBuffer, numClicks, nX, nY);
}