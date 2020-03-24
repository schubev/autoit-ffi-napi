import { MouseButton } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseDown(button?: MouseButton, library?: Pick<PromisifiedAutoitLib, 'AU3_MouseDown'>): Promise<void>;
