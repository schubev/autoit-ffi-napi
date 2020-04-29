import { WindowDescription } from 'autoit-advanced-descriptor';
import { Control } from './control';
import { LibraryParam } from '../util/library-param';
import { controlGetHandle, winActivateByHandle, winActiveByHandle, winCloseByHandle, winExistsByHandle, winGetStateByHandle, winMinimizeAll, winMinimizeAllUndo, winWaitActiveByHandle, winWaitCloseByHandle, winGetTextByHandle, winGetTitleByHandle, winKillByHandle, winMenuSelectItemByHandle } from '../functions';
import { Hwnd, WindowState } from '../types';
export declare class Window {
    private hwnd;
    private constructor();
    static ofHwnd(hwnd: Hwnd): Window;
    static ofSelector(windowDescription: WindowDescription, windowText?: string): Promise<Window | null>;
    static wait(windowDescription: WindowDescription, windowText?: string, timeoutMillisecs?: number): Promise<Window | null>;
    getHwnd(): Hwnd;
    static minimizeAll(library?: LibraryParam<typeof winMinimizeAll>): Promise<void>;
    static minimizeAllUndo(library?: LibraryParam<typeof winMinimizeAllUndo>): Promise<void>;
    getControl(controlDescription: WindowDescription, library?: LibraryParam<typeof controlGetHandle>): Promise<Control | null>;
    activate(library?: LibraryParam<typeof winActivateByHandle>): Promise<boolean>;
    active(library?: LibraryParam<typeof winActiveByHandle>): Promise<boolean>;
    close(library?: LibraryParam<typeof winCloseByHandle>): Promise<boolean>;
    exists(library?: LibraryParam<typeof winExistsByHandle>): Promise<boolean>;
    getState(library?: LibraryParam<typeof winGetStateByHandle>): Promise<Set<WindowState>>;
    getText(textSize?: number, library?: LibraryParam<typeof winGetTextByHandle>): Promise<string>;
    getTitle(titleSize?: number, library?: LibraryParam<typeof winGetTitleByHandle>): Promise<string>;
    kill(library?: LibraryParam<typeof winKillByHandle>): Promise<boolean>;
    selectMenuItem(item0: string, item1?: string, item2?: string, item3?: string, item4?: string, item5?: string, item6?: string, item7?: string, library?: LibraryParam<typeof winMenuSelectItemByHandle>): Promise<boolean>;
    waitActive(timeoutSecs?: number, library?: LibraryParam<typeof winWaitActiveByHandle>): Promise<boolean>;
    waitClose(timeoutSecs?: number, library?: LibraryParam<typeof winWaitCloseByHandle>): Promise<boolean>;
}
