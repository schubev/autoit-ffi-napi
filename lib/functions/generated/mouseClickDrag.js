import { inWstrOfString } from '../../wrap-utils';
import { lib } from '../../lowlevel';
import { promisify } from 'util';
const AU3_MouseClickDrag = promisify(lib.AU3_MouseClickDrag.async);
export async function mouseClickDrag(button, xStart, yStart, xEnd, yEnd, speed = 10) {
    const buttonBuffer = inWstrOfString(button);
    const result = await AU3_MouseClickDrag(buttonBuffer, xStart, yStart, xEnd, yEnd, speed);
    return result !== 0;
}
