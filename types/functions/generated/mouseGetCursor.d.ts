import { Cursor } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseGetCursor(library?: Pick<PromisifiedAutoitLib, 'AU3_MouseGetCursor'>): Promise<Cursor>;
