import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winActiveByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinActiveByHandle'>): Promise<boolean>;
