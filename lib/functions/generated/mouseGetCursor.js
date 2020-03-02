import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_MouseGetCursor = promisify(lib.AU3_MouseGetCursor.async);
export async function mouseGetCursor() {
    return AU3_MouseGetCursor();
}
