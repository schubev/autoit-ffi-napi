import { Hwnd, MouseButton } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlClickByHandle(window: Hwnd, control: Hwnd, button: MouseButton, numClicks: number, nX?: number, nY?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlClickByHandle'>): Promise<boolean>;
