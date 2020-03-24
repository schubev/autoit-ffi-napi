import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlSetText(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, text: string, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlSetText'>): Promise<number>;
