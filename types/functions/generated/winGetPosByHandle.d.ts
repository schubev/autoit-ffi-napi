import { Hwnd, Rectangle } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winGetPosByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetPosByHandle'>): Promise<Rectangle | null>;
