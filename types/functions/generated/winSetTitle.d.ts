import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winSetTitle(windowDescription: WindowDescription, windowText: string, title: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetTitle'>): Promise<boolean>;
