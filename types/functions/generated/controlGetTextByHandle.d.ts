import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlGetTextByHandle(window: Hwnd, control: Hwnd, controlTextSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetTextByHandle'>): Promise<string>;
