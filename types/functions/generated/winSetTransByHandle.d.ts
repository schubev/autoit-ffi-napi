import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winSetTransByHandle(window: Hwnd, transparency: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetTransByHandle'>): Promise<boolean>;
