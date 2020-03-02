import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlFocusByHandle = promisify(lib.AU3_ControlFocusByHandle.async);
export async function controlFocusByHandle(window, control) {
    return AU3_ControlFocusByHandle(window.toNumber(), control.toNumber());
}
