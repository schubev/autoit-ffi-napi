import { lib } from '../../lowlevel';
export async function controlShowByHandle(window, control) {
    return new Promise(resolve => {
        lib.AU3_ControlShowByHandle.async(window, control, resolve);
    });
}
