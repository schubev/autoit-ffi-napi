import { Hwnd, Rectangle } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winGetClientSizeByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetClientSizeByHandle'>): Promise<Rectangle | null>;
