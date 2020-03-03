import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitActiveByHandle = promisify(lib.AU3_WinWaitActiveByHandle.async);
export async function winWaitActiveByHandle(window, timeoutSeconds = 0) {
    const result = await AU3_WinWaitActiveByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
