import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, outWstrResolver, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function controlGetText(windowDescription, windowText, controlDescription, controlTextSize = 512) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription);
    const outBuffer = outWstrOfSize(controlTextSize);
    return new Promise(resolve => {
        lib.AU3_ControlGetText.async(windowDescriptionBuffer, windowTextBuffer, controlDescriptionBuffer, outBuffer, controlTextSize, outWstrResolver(outBuffer, resolve));
    });
}
