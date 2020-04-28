import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlFocusByHandle(window: Hwnd, control: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlFocusByHandle'>): Promise<boolean>;
