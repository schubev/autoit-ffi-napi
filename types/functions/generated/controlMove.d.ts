import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlMove(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, nX: number, nY: number, nWidth?: number, nHeight?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlMove'>): Promise<number>;
