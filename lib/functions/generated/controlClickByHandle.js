import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlClickByHandle(window, control, button, numClicks, nX, nY) {
    const buttonBuffer = inWstrOfString(button);
    return new Promise(resolve => {
        lib.AU3_ControlClickByHandle.async(window, control, buttonBuffer, numClicks, nX, nY, resolve);
    });
}
