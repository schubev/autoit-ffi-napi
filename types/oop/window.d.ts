import { WindowDescription } from 'autoit-advanced-descriptor';
import { Control } from './control';
import { Hwnd, WindowState } from '../types';
export declare class Window {
    private hwnd;
    private constructor();
    static ofHwnd(hwnd: Hwnd): Window;
    static ofSelector(windowDescription: WindowDescription, windowText?: string): Promise<Window | null>;
    getHwnd(): Hwnd;
    static minimizeAll(): Promise<void>;
    static minimizeAllUndo(): Promise<void>;
    getControl(controlDescription: WindowDescription): Promise<Control | null>;
    activate(): Promise<boolean>;
    active(): Promise<boolean>;
    close(): Promise<boolean>;
    exists(): Promise<boolean>;
    getState(): Promise<Set<WindowState>>;
    getText(): Promise<string>;
    getTitle(): Promise<string>;
    kill(): Promise<boolean>;
    selectMenuItem(item0: string, item1?: string, item2?: string, item3?: string, item4?: string, item5?: string, item6?: string, item7?: string): Promise<boolean>;
}
