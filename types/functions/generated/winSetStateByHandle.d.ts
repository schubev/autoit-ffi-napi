import { Hwnd, SetWindowState } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winSetStateByHandle(window: Hwnd, state: SetWindowState, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetStateByHandle'>): Promise<boolean>;
