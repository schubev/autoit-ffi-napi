import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlShowByHandle(window: Hwnd, control: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlShowByHandle'>): Promise<number>;
