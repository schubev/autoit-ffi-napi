import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winMove(windowDescription: WindowDescription, windowText: string, x: number, y: number, width?: number, height?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinMove'>): Promise<boolean>;
