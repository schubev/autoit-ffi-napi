import { Hwnd } from '../../types';
export declare function winWaitNotActiveByHandle(window: Hwnd, timeoutSeconds?: number): Promise<boolean>;
