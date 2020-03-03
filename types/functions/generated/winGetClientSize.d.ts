import { Rectangle } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winGetClientSize(windowDescription: WindowDescription, windowText: string): Promise<Rectangle | null>;
