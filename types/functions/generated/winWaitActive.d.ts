import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWaitActive(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitActive'>): Promise<boolean>;
