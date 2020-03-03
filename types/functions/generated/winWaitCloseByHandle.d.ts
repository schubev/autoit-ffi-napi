import { Hwnd } from '../../types';
export declare function winWaitCloseByHandle(window: Hwnd, timeoutSeconds?: number): Promise<boolean>;
