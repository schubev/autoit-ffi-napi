import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlGetFocusByHandle(window: Hwnd, controlSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetFocusByHandle'>): Promise<string>;
