import { lib } from '../lowlevel';
import { stringOfOutWstr } from '../wrap-utils';
export async function clipGet(clipSize = 0x200) {
    const clipBuffer = Buffer.alloc(clipSize * 2);
    return new Promise(resolve => {
        lib.AU3_ClipGet.async(clipBuffer, clipSize, () => {
            resolve(stringOfOutWstr(clipBuffer));
        });
    });
}
