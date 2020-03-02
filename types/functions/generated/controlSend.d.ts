import { SendMode } from '../../types';
import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlSend(windowDescription: string | WindowDescription, windowText: string, controlDescription: string | WindowDescription, text: string, mode: SendMode): Promise<number>;
