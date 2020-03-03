import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinExistsByHandle = promisify(lib.AU3_WinExistsByHandle.async);
export async function winExistsByHandle(window) {
    const result = await AU3_WinExistsByHandle(window.toNumber());
    return result !== 0;
}
