import { MouseScrollDirection } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseWheel(direction: MouseScrollDirection, increments?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_MouseWheel'>): Promise<void>;
