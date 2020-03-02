import { inWstrOfWindowDescription } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlGetHandle(window, control) {
    const controlBuffer = inWstrOfWindowDescription(control);
    return new Promise(resolve => {
        lib.AU3_ControlGetHandle.async(window, controlBuffer, resolve);
    });
}
