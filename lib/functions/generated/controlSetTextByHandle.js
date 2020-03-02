import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlSetTextByHandle = promisify(lib.AU3_ControlSetTextByHandle.async);
export async function controlSetTextByHandle(window, control, text) {
    const textBuffer = inWstrOfString(text);
    return AU3_ControlSetTextByHandle(window.toNumber(), control.toNumber(), textBuffer);
}
