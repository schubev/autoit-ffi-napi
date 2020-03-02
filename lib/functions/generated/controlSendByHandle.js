import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlSendByHandle = promisify(lib.AU3_ControlSendByHandle.async);
export async function controlSendByHandle(window, control, text, mode) {
    const textBuffer = inWstrOfString(text);
    return AU3_ControlSendByHandle(window.toNumber(), control.toNumber(), textBuffer, mode);
}
