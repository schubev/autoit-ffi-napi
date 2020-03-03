import { Hwnd } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winActivate(windowDescription: WindowDescription, windowText: string): Promise<Hwnd | null>;
