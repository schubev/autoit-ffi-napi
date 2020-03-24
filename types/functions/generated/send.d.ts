import { PromisifiedAutoitLib } from '../../generated-lib-type';
import { SendMode } from '../../types';
export declare function send(text: string, mode?: SendMode, library?: Pick<PromisifiedAutoitLib, 'AU3_Send'>): Promise<void>;
