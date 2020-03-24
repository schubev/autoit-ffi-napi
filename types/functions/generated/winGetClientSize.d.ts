import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { Rectangle } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winGetClientSize(windowDescription: WindowDescription, windowText: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetClientSize'>): Promise<Rectangle | null>;
