import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlEnable(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlEnable'>): Promise<number>;
