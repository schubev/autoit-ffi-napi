import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function controlMoveByHandle(window: Hwnd, control: Hwnd, nX: number, nY: number, nWidth?: number, nHeight?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlMoveByHandle'>): Promise<number>;
