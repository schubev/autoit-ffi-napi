import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winSetTitleByHandle(window: Hwnd, title: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetTitleByHandle'>): Promise<boolean>;
