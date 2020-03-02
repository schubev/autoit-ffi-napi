import { lib } from '../../lowlevel';
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_ControlGetFocusByHandle = promisify(lib.AU3_ControlGetFocusByHandle.async);
export async function controlGetFocusByHandle(window, controlSize = 512) {
    const outBuffer = outWstrOfSize(controlSize);
    await AU3_ControlGetFocusByHandle(window.toNumber(), outBuffer, controlSize);
    return stringOfOutWstr(outBuffer);
}
