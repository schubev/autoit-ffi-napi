import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winMenuSelectItemByHandle(window: Hwnd, item0?: string, item1?: string, item2?: string, item3?: string, item4?: string, item5?: string, item6?: string, item7?: string, library?: Pick<PromisifiedAutoitLib, 'AU3_WinMenuSelectItemByHandle'>): Promise<number>;
