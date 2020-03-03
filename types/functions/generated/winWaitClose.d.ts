import { WindowDescription } from 'autoit-advanced-descriptor';
export declare function winWaitClose(windowDescription: WindowDescription, windowText: string, timeoutSeconds?: number): Promise<boolean>;
