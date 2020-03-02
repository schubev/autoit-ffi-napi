import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlDisableByHandle = promisify(lib.AU3_ControlDisableByHandle.async);
export async function controlDisableByHandle(window, control) {
    return AU3_ControlDisableByHandle(window.toNumber(), control.toNumber());
}
