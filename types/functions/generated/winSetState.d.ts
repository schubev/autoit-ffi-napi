import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
import { WindowState } from '../../types';
export declare function winSetState(windowDescription: WindowDescription, windowText: string, state: WindowState, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetState'>): Promise<boolean>;
