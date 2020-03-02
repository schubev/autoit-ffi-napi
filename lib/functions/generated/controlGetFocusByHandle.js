import { lib } from '../../lowlevel';
import { outWstrOfSize, outWstrResolver } from '../../wrap-utils';
export async function controlGetFocusByHandle(window, controlSize = 512) {
    const outBuffer = outWstrOfSize(controlSize);
    return new Promise(resolve => {
        lib.AU3_ControlGetFocusByHandle.async(window, outBuffer, controlSize, outWstrResolver(outBuffer, resolve));
    });
}
