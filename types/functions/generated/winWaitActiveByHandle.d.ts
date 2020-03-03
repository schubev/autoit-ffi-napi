import { Hwnd } from '../../types';
export declare function winWaitActiveByHandle(window: Hwnd, timeoutSeconds?: number): Promise<boolean>;
