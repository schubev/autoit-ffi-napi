import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winGetTitle(windowDescription: WindowDescription, windowText: string, titleSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetTitle'>): Promise<string>;
