import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winWaitCloseByHandle(window: Hwnd, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitCloseByHandle'>): Promise<boolean>;
