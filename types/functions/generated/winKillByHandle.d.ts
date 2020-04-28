import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winKillByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinKillByHandle'>): Promise<boolean>;
