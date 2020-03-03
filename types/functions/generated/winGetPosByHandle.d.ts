import { Hwnd, Rectangle } from '../../types';
export declare function winGetPosByHandle(window: Hwnd): Promise<Rectangle | null>;
