import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetHandle(window: Hwnd, control: WindowDescription, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetHandle'>): Promise<Hwnd | null>;
