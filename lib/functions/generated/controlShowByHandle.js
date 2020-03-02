import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlShowByHandle = promisify(lib.AU3_ControlShowByHandle.async);
export async function controlShowByHandle(window, control) {
    return AU3_ControlShowByHandle(window.toNumber(), control.toNumber());
}
