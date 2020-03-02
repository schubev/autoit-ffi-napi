import { lib } from '../../lowlevel';
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_ControlGetTextByHandle = promisify(lib.AU3_ControlGetTextByHandle.async);
export async function controlGetTextByHandle(window, control, controlTextSize = 512) {
    const outBuffer = outWstrOfSize(controlTextSize);
    await AU3_ControlGetTextByHandle(window.toNumber(), control.toNumber(), outBuffer, controlTextSize);
    return stringOfOutWstr(outBuffer);
}
