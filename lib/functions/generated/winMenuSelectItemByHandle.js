import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_WinMenuSelectItemByHandle = promisify(lib.AU3_WinMenuSelectItemByHandle.async);
export async function winMenuSelectItemByHandle(window, item0 = '', item1 = '', item2 = '', item3 = '', item4 = '', item5 = '', item6 = '', item7 = '') {
    const item0Buffer = inWstrOfString(item0);
    const item1Buffer = inWstrOfString(item1);
    const item2Buffer = inWstrOfString(item2);
    const item3Buffer = inWstrOfString(item3);
    const item4Buffer = inWstrOfString(item4);
    const item5Buffer = inWstrOfString(item5);
    const item6Buffer = inWstrOfString(item6);
    const item7Buffer = inWstrOfString(item7);
    return AU3_WinMenuSelectItemByHandle(window.toNumber(), item0Buffer, item1Buffer, item2Buffer, item3Buffer, item4Buffer, item5Buffer, item6Buffer, item7Buffer);
}
