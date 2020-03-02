import { Hwnd, MouseButton } from '../../types';
export declare function controlClickByHandle(window: Hwnd, control: Hwnd, button: MouseButton, numClicks: number, nX?: number, nY?: number): Promise<number>;
