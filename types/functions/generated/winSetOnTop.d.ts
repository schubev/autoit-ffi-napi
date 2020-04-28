import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winSetOnTop(windowDescription: WindowDescription, windowText: string, onTop?: boolean, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetOnTop'>): Promise<boolean>;
