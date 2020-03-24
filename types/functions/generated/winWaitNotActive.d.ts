import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWaitNotActive(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitNotActive'>): Promise<boolean>;
