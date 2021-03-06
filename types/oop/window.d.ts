import { WindowDescription } from 'autoit-advanced-descriptor';
import { Control } from './control';
import { LibraryParam } from '../util/library-param';
import { controlGetHandle, winActivateByHandle, winActiveByHandle, winCloseByHandle, winExistsByHandle, winGetClientSizeByHandle, winGetPosByHandle, winGetProcessByHandle, winGetStateByHandle, winGetTextByHandle, winGetTitleByHandle, winKillByHandle, winMenuSelectItemByHandle, winMinimizeAll, winMinimizeAllUndo, winMoveByHandle, winSetOnTopByHandle, winSetStateByHandle, winSetTitleByHandle, winSetTransByHandle, winWaitActiveByHandle, winWaitCloseByHandle, winWaitNotActiveByHandle } from '../functions';
import { Hwnd, WindowState, Rectangle, Point, SetWindowState } from '../types';
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
    getClientSize(library?: LibraryParam<typeof winGetClientSizeByHandle>): Promise<Rectangle | null>;
    getPos(library?: LibraryParam<typeof winGetPosByHandle>): Promise<Rectangle | null>;
    getProcess(library?: LibraryParam<typeof winGetProcessByHandle>): Promise<number>;
    getState(library?: LibraryParam<typeof winGetStateByHandle>): Promise<Set<WindowState>>;
    getText(textSize?: number, library?: LibraryParam<typeof winGetTextByHandle>): Promise<string>;
    getTitle(titleSize?: number, library?: LibraryParam<typeof winGetTitleByHandle>): Promise<string>;
    kill(library?: LibraryParam<typeof winKillByHandle>): Promise<boolean>;
    selectMenuItem(item0: string, item1?: string, item2?: string, item3?: string, item4?: string, item5?: string, item6?: string, item7?: string, library?: LibraryParam<typeof winMenuSelectItemByHandle>): Promise<boolean>;
    move(rectangle: Readonly<Point | Rectangle>, library?: LibraryParam<typeof winMoveByHandle>): Promise<boolean>;
    setOnTop(onTop: boolean, library?: LibraryParam<typeof winSetOnTopByHandle>): Promise<boolean>;
    setState(state: SetWindowState, library?: LibraryParam<typeof winSetStateByHandle>): Promise<boolean>;
    setTitle(title: string, library?: LibraryParam<typeof winSetTitleByHandle>): Promise<boolean>;
    setTransparency(transparency: number, library?: LibraryParam<typeof winSetTransByHandle>): Promise<boolean>;
    waitActive(timeoutSecs?: number, library?: LibraryParam<typeof winWaitActiveByHandle>): Promise<boolean>;
    waitClose(timeoutSecs?: number, library?: LibraryParam<typeof winWaitCloseByHandle>): Promise<boolean>;
    waitNotActive(timeoutSecs?: number, library?: LibraryParam<typeof winWaitNotActiveByHandle>): Promise<boolean>;
}
