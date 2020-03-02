import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlHideByHandle = promisify(lib.AU3_ControlHideByHandle.async);
export async function controlHideByHandle(window, control) {
    return AU3_ControlHideByHandle(window.toNumber(), control.toNumber());
}
