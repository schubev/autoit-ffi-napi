import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winWaitActiveByHandle(window: Hwnd, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitActiveByHandle'>): Promise<boolean>;
