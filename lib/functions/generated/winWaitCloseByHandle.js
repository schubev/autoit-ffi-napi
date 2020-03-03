import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitCloseByHandle = promisify(lib.AU3_WinWaitCloseByHandle.async);
export async function winWaitCloseByHandle(window, timeoutSeconds = 0) {
    const result = await AU3_WinWaitCloseByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
