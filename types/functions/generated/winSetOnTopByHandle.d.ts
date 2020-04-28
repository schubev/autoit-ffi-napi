import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winSetOnTopByHandle(window: Hwnd, onTop?: boolean, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetOnTopByHandle'>): Promise<boolean>;
