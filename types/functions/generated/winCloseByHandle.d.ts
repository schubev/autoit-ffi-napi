import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winCloseByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinCloseByHandle'>): Promise<boolean>;
