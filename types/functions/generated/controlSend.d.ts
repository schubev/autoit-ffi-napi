import { SendMode } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlSend(windowDescription: WindowDescription, windowText: string, controlDescription: WindowDescription, text: string, mode: SendMode): Promise<number>;
