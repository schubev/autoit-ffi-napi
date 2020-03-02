import { MouseButton } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlClick(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, button: MouseButton, numClicks: number, nX?: number, nY?: number): Promise<boolean>;
