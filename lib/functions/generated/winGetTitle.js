import { inWstrOfString, inWstrOfWindowDescription, outWstrOfSize, outWstrResolver, } from '../../wrap-utils';
import { lib } from '../../lowlevel';
export async function winGetTitle(windowDescription, windowText, titleSize = 512) {
    const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription);
    const windowTextBuffer = inWstrOfString(windowText);
    const outBuffer = outWstrOfSize(titleSize);
    return new Promise(resolve => {
        lib.AU3_WinGetTitle.async(windowDescriptionBuffer, windowTextBuffer, outBuffer, titleSize, outWstrResolver(outBuffer, resolve));
    });
}
