import { lib } from '../../lowlevel';
export async function controlFocusByHandle(window, control) {
    return new Promise(resolve => {
        lib.AU3_ControlFocusByHandle.async(window, control, resolve);
    });
}
