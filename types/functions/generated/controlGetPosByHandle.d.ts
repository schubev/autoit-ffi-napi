import { Hwnd, Rectangle } from '../../types';
export declare function controlGetPosByHandle(window: Hwnd, control: Hwnd): Promise<Rectangle | null>;
