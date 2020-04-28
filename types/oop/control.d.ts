import { Hwnd, MouseButton, SendMode, Rectangle } from '../types';
import { Window } from './window';
export declare class Control {
    private window;
    private hwnd;
    private constructor();
    static ofParentAndHwnd(window: Window, hwnd: Hwnd): Control;
    setText(text: string): Promise<boolean>;
    getText(textSize?: number): Promise<string>;
    focus(): Promise<boolean>;
    click(button?: MouseButton, count?: number, position?: {
        readonly x: number;
        readonly y: number;
    }): Promise<boolean>;
    getPos(): Promise<Rectangle | null>;
    enable(): Promise<boolean>;
    disable(): Promise<boolean>;
    send(text: string, mode?: SendMode): Promise<boolean>;
}
