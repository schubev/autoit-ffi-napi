import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winActivateByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinActivateByHandle'>): Promise<boolean>;
