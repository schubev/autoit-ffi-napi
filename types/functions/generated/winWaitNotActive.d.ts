import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWaitNotActive(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number): Promise<boolean>;
