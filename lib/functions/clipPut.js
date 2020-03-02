import { lib } from '../lowlevel';
import { inWstrOfString } from '../wrap-utils';
export async function clipPut(clip) {
    const clipBuffer = inWstrOfString(clip);
    return new Promise(resolve => {
        lib.AU3_ClipPut(clipBuffer, (status) => {
            resolve(Boolean(status));
        });
    });
}
