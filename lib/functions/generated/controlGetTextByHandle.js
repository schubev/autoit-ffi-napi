import { lib } from '../../lowlevel';
import { outWstrOfSize, outWstrResolver } from '../../wrap-utils';
export async function controlGetTextByHandle(window, control, controlTextSize = 512) {
    const outBuffer = outWstrOfSize(controlTextSize);
    return new Promise(resolve => {
        lib.AU3_ControlGetTextByHandle.async(window, control, outBuffer, controlTextSize, outWstrResolver(outBuffer, resolve));
    });
}
