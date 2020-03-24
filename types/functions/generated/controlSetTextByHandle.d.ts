import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlSetTextByHandle(window: Hwnd, control: Hwnd, text: string, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlSetTextByHandle'>): Promise<number>;
