import { MouseButton } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseUp(button?: MouseButton, library?: Pick<PromisifiedAutoitLib, 'AU3_MouseUp'>): Promise<void>;
