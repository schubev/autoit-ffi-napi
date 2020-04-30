import { Hwnd, MouseButton, SendMode, Rectangle } from '../types';
import { LibraryParam } from '../util/library-param';
import { Window } from './window';
import { controlClickByHandle, controlDisableByHandle, controlEnableByHandle, controlFocusByHandle, controlGetPosByHandle, controlGetTextByHandle, controlSendByHandle, controlSetTextByHandle } from '../functions';
export declare class Control {
    private window;
    private hwnd;
    private constructor();
    static ofParentAndHwnd(window: Window, hwnd: Hwnd): Control;
    setText(text: string, library?: LibraryParam<typeof controlSetTextByHandle>): Promise<boolean>;
    getText(textSize?: number, library?: LibraryParam<typeof controlGetTextByHandle>): Promise<string>;
    focus(library?: LibraryParam<typeof controlFocusByHandle>): Promise<boolean>;
    click(button?: MouseButton, count?: number, position?: {
        readonly x: number;
        readonly y: number;
    }, library?: LibraryParam<typeof controlClickByHandle>): Promise<boolean>;
    getPos(library?: LibraryParam<typeof controlGetPosByHandle>): Promise<Rectangle | null>;
    enable(library?: LibraryParam<typeof controlEnableByHandle>): Promise<boolean>;
    disable(library?: LibraryParam<typeof controlDisableByHandle>): Promise<boolean>;
    send(text: string, mode?: SendMode, library?: LibraryParam<typeof controlSendByHandle>): Promise<boolean>;
}
