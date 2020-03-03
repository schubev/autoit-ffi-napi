import { Hwnd } from '../../types';
export declare function winWaitByHandle(window: Hwnd, timeoutSeconds?: number): Promise<boolean>;
