import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlHideByHandle(window: Hwnd, control: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlHideByHandle'>): Promise<number>;
