import { lib } from '../../lowlevel';
export async function controlMoveByHandle(window, control, nX, nY, nWidth, nHeight) {
    return new Promise(resolve => {
        lib.AU3_ControlMoveByHandle.async(window, control, nX, nY, nWidth, nHeight, resolve);
    });
}
