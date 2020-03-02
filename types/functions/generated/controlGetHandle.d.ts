import { Hwnd } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetHandle(window: Hwnd, control: WindowDescription): Promise<Hwnd | null>;
