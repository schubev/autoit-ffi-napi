import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winWaitByHandle(window: Hwnd, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitByHandle'>): Promise<boolean>;
