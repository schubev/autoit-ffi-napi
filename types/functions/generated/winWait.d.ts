import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWait(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWait'>): Promise<boolean>;
