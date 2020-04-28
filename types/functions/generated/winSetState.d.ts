import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { SetWindowState } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winSetState(windowDescription: WindowDescription, windowText: string, state: SetWindowState, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetState'>): Promise<boolean>;
