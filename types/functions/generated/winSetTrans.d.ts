import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winSetTrans(windowDescription: WindowDescription, windowText: string, transparency: number, library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetTrans'>): Promise<boolean>;
