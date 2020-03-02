import { MouseButton } from '../types';
import { inWstrOfString } from '../wrap-utils';
import { lib } from '../lowlevel';
export async function controlClickByHandle(hwnd, button = MouseButton.Default, numClicks = 1, nX = -2147483647, nY = -2147483647) {
    return new Promise(resolve => {
        const buttonBuffer = inWstrOfString(button);
        lib.AU3_ControlClickByHandle.async(hwnd.toNumber(), buttonBuffer, numClicks, nX, nY, (status) => {
            resolve(Boolean(status));
        });
    });
}
