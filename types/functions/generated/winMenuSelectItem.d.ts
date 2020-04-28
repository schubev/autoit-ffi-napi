import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winMenuSelectItem(windowDescription: WindowDescription, windowText: string, item0?: string, item1?: string, item2?: string, item3?: string, item4?: string, item5?: string, item6?: string, item7?: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinMenuSelectItem'>): Promise<boolean>;
