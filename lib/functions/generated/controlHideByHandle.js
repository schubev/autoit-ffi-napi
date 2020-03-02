import { lib } from '../../lowlevel';
export async function controlHideByHandle(window, control) {
    return new Promise(resolve => {
        lib.AU3_ControlHideByHandle.async(window, control, resolve);
    });
}
