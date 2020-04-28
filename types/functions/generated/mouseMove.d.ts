import { PromisifiedAutoitLib } from '../../generated-lib-type';
export declare function mouseMove(x: number, y: number, speed?: number, library?: Pick<PromisifiedAutoitLib, 'AU3_MouseMove'>): Promise<void>;
