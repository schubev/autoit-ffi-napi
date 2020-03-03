import { lib } from '../../lowlevel';
import { outWstrOfSize, stringOfOutWstr } from '../../wrap-utils';
import { promisify } from 'util';
const AU3_WinGetTitleByHandle = promisify(lib.AU3_WinGetTitleByHandle.async);
export async function winGetTitleByHandle(window, titleSize = 512) {
    const outBuffer = outWstrOfSize(titleSize);
    await AU3_WinGetTitleByHandle(window.toNumber(), outBuffer, titleSize);
    return stringOfOutWstr(outBuffer);
}
