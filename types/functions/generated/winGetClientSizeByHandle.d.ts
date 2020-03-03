import { Hwnd, Rectangle } from '../../types';
export declare function winGetClientSizeByHandle(window: Hwnd): Promise<Rectangle | null>;
