import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winWaitNotActiveByHandle(window: Hwnd, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitNotActiveByHandle'>): Promise<boolean>;
