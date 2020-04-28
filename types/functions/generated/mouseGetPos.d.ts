import { Point } from '../../types';
import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseGetPos(library?: Pick<PromisifiedAutoitLib, 'AU3_MouseGetPos'>): Promise<Point | null>;
