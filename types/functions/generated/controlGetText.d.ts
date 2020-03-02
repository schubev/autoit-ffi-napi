import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function controlGetText(windowDescription: string | WindowDescription, windowText: string, controlDescription: string | WindowDescription, controlTextSize?: number): Promise<string>;
