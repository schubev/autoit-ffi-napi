import { Hwnd, WindowState } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winGetStateByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetStateByHandle'>): Promise<Set<WindowState>>;
