import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlDisableByHandle(window: Hwnd, control: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlDisableByHandle'>): Promise<boolean>;
