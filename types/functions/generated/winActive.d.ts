import { Hwnd } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winActive(windowDescription: WindowDescription, windowText: string): Promise<Hwnd | null>;
