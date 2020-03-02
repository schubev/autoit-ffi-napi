import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlSetTextByHandle(window, control, text) {
    const textBuffer = inWstrOfString(text);
    return new Promise(resolve => {
        lib.AU3_ControlSetTextByHandle.async(window, control, textBuffer, resolve);
    });
}
