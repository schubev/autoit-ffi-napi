import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winGetTextByHandle(window: Hwnd, textSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetTextByHandle'>): Promise<string>;
