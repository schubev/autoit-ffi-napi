import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winGetTitleByHandle(window: Hwnd, titleSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetTitleByHandle'>): Promise<string>;
