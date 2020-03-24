import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWaitClose(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinWaitClose'>): Promise<boolean>;
