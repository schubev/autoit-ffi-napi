import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlSendByHandle(window, control, text, mode) {
    const textBuffer = inWstrOfString(text);
    return new Promise(resolve => {
        lib.AU3_ControlSendByHandle.async(window, control, textBuffer, mode, resolve);
    });
}
