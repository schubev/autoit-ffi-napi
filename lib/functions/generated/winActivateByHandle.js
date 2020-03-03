import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinActivateByHandle = promisify(lib.AU3_WinActivateByHandle.async);
export async function winActivateByHandle(window) {
    const result = await AU3_WinActivateByHandle(window.toNumber());
    return result !== 0;
}
