import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetText(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, controlTextSize?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetText'>): Promise<string>;
