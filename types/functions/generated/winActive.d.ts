import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winActive(windowDescription: WindowDescription, windowText: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinActive'>): Promise<boolean>;
