import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { Rectangle } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winGetPos(windowDescription: WindowDescription, windowText: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetPos'>): Promise<Rectangle | null>;
