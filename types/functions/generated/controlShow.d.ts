import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlShow(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlShow'>): Promise<number>;
