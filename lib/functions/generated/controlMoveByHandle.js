import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_ControlMoveByHandle = promisify(lib.AU3_ControlMoveByHandle.async);
export async function controlMoveByHandle(window, control, nX, nY, nWidth = -1, nHeight = -1) {
    return AU3_ControlMoveByHandle(window.toNumber(), control.toNumber(), nX, nY, nWidth, nHeight);
}
