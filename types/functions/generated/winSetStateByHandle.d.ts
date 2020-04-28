import { Hwnd, WindowState } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winSetStateByHandle(window: Hwnd, state: WindowState, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetStateByHandle'>): Promise<boolean>;
