import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winMoveByHandle(window: Hwnd, x: number, y: number, width?: number, height?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinMoveByHandle'>): Promise<boolean>;
