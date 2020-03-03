import { Rectangle } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetPos(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription): Promise<Rectangle | null>;
