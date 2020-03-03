import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWaitActive(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number): Promise<boolean>;
