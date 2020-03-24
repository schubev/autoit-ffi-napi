import { Hwnd, Rectangle } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlGetPosByHandle(window: Hwnd, control: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetPosByHandle'>): Promise<Rectangle | null>;
