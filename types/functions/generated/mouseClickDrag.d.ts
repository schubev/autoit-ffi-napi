import { MouseButton } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseClickDrag(button: MouseButton, xStart: number, yStart: number, xEnd: number, yEnd: number, speed?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_MouseClickDrag'>): Promise<boolean>;
