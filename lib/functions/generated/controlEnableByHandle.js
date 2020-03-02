import { lib } from '../../lowlevel';
export async function controlEnableByHandle(window, control) {
    return new Promise(resolve => {
        lib.AU3_ControlEnableByHandle.async(window, control, resolve);
    });
}
