import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { Rectangle } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetPos(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlGetPos'>): Promise<Rectangle | null>;
