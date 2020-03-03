import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinActiveByHandle = promisify(lib.AU3_WinActiveByHandle.async);
export async function winActiveByHandle(window) {
    const result = await AU3_WinActiveByHandle(window.toNumber());
    return result !== 0;
}
