import { PromisifiedAutoitLib } from '../generated-lib-type';
import { AutoitOptions } from '../options';
export declare function autoitSetOptions(options: Readonly<AutoitOptions>, library?: Pick<PromisifiedAutoitLib, 'AU3_AutoItSetOption'>): Promise<AutoitOptions>;
