import { Hwnd } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function winExistsByHandle(window: Hwnd, library?: Pick<PromisifiedAutoitLib, 'AU3_WinExistsByHandle'>): Promise<boolean>;
