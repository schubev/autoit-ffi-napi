import { Hwnd, SendMode } from '../../types';
export declare function controlSendByHandle(window: Hwnd, control: Hwnd, text: string, mode: SendMode): Promise<number>;
