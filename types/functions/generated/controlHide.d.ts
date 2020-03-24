import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlHide(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlHide'>): Promise<number>;
