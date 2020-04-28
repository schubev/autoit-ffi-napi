/// <reference types="node" />
import { WindowDescription } from 'autoit-advanced-descriptor';
import { Rectangle, Point } from './types';
export declare function inWstrOfString(string: string): Buffer;
export declare function inWstrOfWindowDescription(description: string | WindowDescription): Buffer;
export declare function outWstrOfSize(size: number): Buffer;
export declare function stringOfOutWstr(buffer: Buffer): string;
export declare function outWstrResolver(outBuffer: Buffer, resolve: (outString: string) => void): () => void;
export declare function outPointBuffer(): Promise<Buffer>;
export declare function pointOfPointBuffer(buffer: Buffer): Promise<Point>;
export declare function outRectangleBuffer(): Promise<Buffer>;
export declare function rectangleOfRectangleBuffer(buffer: Buffer): Promise<Rectangle>;
export declare function decomposeBitSet(bitset: number): Set<number>;
