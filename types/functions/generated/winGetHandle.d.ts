import { Hwnd } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winGetHandle(windowDescription: WindowDescription, windowText: string): Promise<Hwnd | null>;
