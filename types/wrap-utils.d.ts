/// <reference types="node" />
import { WindowDescription } from 'autoit-advanced-descriptor';
import { Rectangle } from './types';
export declare function inWstrOfString(string: string): Buffer;
export declare function inWstrOfWindowDescription(description: string | WindowDescription): Buffer;
export declare function outWstrOfSize(size: number): Buffer;
export declare function stringOfOutWstr(buffer: Buffer): string;
export declare function outWstrResolver(outBuffer: Buffer, resolve: (outString: string) => void): () => void;
export declare function outRectangleBuffer(): Buffer;
export declare function rectangleOfRectangleBuffer(buffer: Buffer): Rectangle;
