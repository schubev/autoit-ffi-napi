import { lib } from '../../lowlevel';
export async function controlDisableByHandle(window, control) {
    return new Promise(resolve => {
        lib.AU3_ControlDisableByHandle.async(window, control, resolve);
    });
}
