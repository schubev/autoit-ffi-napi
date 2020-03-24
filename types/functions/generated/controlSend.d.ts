import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { SendMode } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlSend(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, text: string, mode?: SendMode, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlSend'>): Promise<number>;
