import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winGetProcessByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetProcessByHandle'>): Promise<number>;
