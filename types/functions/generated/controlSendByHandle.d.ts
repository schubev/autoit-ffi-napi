import { Hwnd, SendMode } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlSendByHandle(window: Hwnd, control: Hwnd, text: string, mode?: SendMode, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlSendByHandle'>): Promise<number>;
