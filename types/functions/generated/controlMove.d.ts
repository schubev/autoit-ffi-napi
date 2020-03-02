import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlMove(windowDescription: string | WindowDescription, windowText: string, controlDescription: string | WindowDescription, nX: number, nY: number, nWidth: number, nHeight: number): Promise<number>;
