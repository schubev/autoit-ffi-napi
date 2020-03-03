import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWait(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number): Promise<boolean>;
