import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winActivate(windowDescription: WindowDescription, windowText: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinActivate'>): Promise<boolean>;
