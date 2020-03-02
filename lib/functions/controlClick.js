import { descriptor } from 'autoit-advanced-descriptor';
import { MouseButton } from '../types';
import { inWstrOfString } from '../wrap-utils';
import { lib } from '../lowlevel';
export async function controlClick(window, text, button = MouseButton.Default, numClicks = 1, nX = -2147483647, nY = -2147483647) {
    const windowString = typeof window === 'string' ? window : descriptor(window);
    return new Promise(resolve => {
        const windowStringBuffer = inWstrOfString(windowString);
        const textBuffer = inWstrOfString(text);
        const buttonBuffer = inWstrOfString(button);
        lib.AU3_ControlClick.async(windowStringBuffer, textBuffer, buttonBuffer, numClicks, nX, nY, (status) => {
            resolve(Boolean(status));
        });
    });
}
