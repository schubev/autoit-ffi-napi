import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlFocus(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlFocus'>): Promise<number>;
