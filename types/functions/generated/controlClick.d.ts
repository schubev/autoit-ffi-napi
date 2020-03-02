import { MouseButton } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlClick(windowDescription: string | WindowDescription, windowText: string, controlDescription: string | WindowDescription, button: MouseButton, numClicks: number, nX: number, nY: number): Promise<boolean>;
