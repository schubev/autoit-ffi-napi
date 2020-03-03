import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinWaitByHandle = promisify(lib.AU3_WinWaitByHandle.async);
export async function winWaitByHandle(window, timeoutSeconds = 0) {
    const result = await AU3_WinWaitByHandle(window.toNumber(), timeoutSeconds);
    return result !== 0;
}
