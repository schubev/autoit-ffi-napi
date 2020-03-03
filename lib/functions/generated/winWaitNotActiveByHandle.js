import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitNotActiveByHandle = promisify(lib.AU3_WinWaitNotActiveByHandle.async);
export async function winWaitNotActiveByHandle(window, timeoutSeconds = 0) {
    const result = await AU3_WinWaitNotActiveByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
