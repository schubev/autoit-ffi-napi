import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetFocus(windowDescription: WindowDescription, windowText: string, controlSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetFocus'>): Promise<string>;
