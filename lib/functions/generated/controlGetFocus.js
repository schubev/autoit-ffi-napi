import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, outWstrResolver, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlGetFocus(windowDescription, windowText, controlSize = 512) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const outBuffer = outWstrOfSize(controlSize);
    return new Promise(resolve => {
        lib.AU3_ControlGetFocus.async(windowDescriptionBuffer, windowTextBuffer, outBuffer, controlSize, outWstrResolver(outBuffer, resolve));
    });
}
