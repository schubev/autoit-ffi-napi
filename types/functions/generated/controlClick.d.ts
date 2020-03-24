import { MouseButton } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlClick(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, button: MouseButton, numClicks: number, nX?: number, nY?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_ControlClick'>): Promise<boolean>;
