import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winGetText(windowDescription: WindowDescription, windowText: string, textSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetText'>): Promise<string>;
