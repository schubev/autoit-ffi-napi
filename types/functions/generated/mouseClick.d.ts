import { MouseButton } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseClick(button?: MouseButton, x?: number, y?: number, clickCount?: number, speed?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_MouseClick'>): Promise<boolean>;
