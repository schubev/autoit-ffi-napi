"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autoit_advanced_descriptor_1 = require("autoit-advanced-descriptor");
const types_1 = require("./types");
function inWstrOfString(string) {
    const bufferLength = 2 + Buffer.byteLength(string, 'utf16le');
    const buffer = Buffer.allocUnsafe(bufferLength);
    buffer.write(string, 0, 'utf16le');
    buffer.writeUInt16LE(0x0000, bufferLength - 2);
    return buffer;
}
exports.inWstrOfString = inWstrOfString;
function inWstrOfWindowDescription(description) {
    if (typeof description === 'string')
        return inWstrOfString(description);
    else
        return inWstrOfString(autoit_advanced_descriptor_1.descriptor(description));
}
exports.inWstrOfWindowDescription = inWstrOfWindowDescription;
function outWstrOfSize(size) {
    return Buffer.alloc(size * 2);
}
exports.outWstrOfSize = outWstrOfSize;
function stringOfOutWstr(buffer) {
    const rawString = buffer.toString('utf16le');
    const rawStringEnd = rawString.indexOf('\u0000');
    if (rawStringEnd === -1)
        return rawString;
    else
        return rawString.slice(0, rawStringEnd);
}
exports.stringOfOutWstr = stringOfOutWstr;
function outWstrResolver(outBuffer, resolve) {
    return function resolveOutWstr() {
        resolve(stringOfOutWstr(outBuffer));
    };
}
exports.outWstrResolver = outWstrResolver;
async function outPointBuffer() {
    const { types } = await Promise.resolve().then(() => require('ref'));
    const longAlignment = types.long.alignment;
    if (longAlignment !== 4)
        throw Error('long alignment is not 4');
    return Buffer.alloc(2 * longAlignment);
}
exports.outPointBuffer = outPointBuffer;
async function pointOfPointBuffer(buffer) {
    const { types } = await Promise.resolve().then(() => require('ref'));
    const longAlignment = types.long.alignment;
    if (longAlignment !== 4)
        throw Error('long alignment is not 4');
    if (buffer.length !== 2 * longAlignment)
        throw Error('buffer has unexpected size');
    return types_1.Point.ofCartesian(buffer.readInt32LE(0), buffer.readInt32LE(4));
}
exports.pointOfPointBuffer = pointOfPointBuffer;
async function outRectangleBuffer() {
    const { types } = await Promise.resolve().then(() => require('ref'));
    const longAlignment = types.long.alignment;
    if (longAlignment !== 4)
        throw Error('long alignment is not 4');
    return Buffer.alloc(4 * longAlignment);
}
exports.outRectangleBuffer = outRectangleBuffer;
async function rectangleOfRectangleBuffer(buffer) {
    const { types } = await Promise.resolve().then(() => require('ref'));
    const longAlignment = types.long.alignment;
    if (longAlignment !== 4)
        throw Error('long alignment is not 4');
    if (buffer.length !== 4 * longAlignment)
        throw Error('buffer has unexpected size');
    return types_1.Rectangle.ofCorners(buffer.readInt32LE(0), buffer.readInt32LE(4), buffer.readInt32LE(8), buffer.readInt32LE(12));
}
exports.rectangleOfRectangleBuffer = rectangleOfRectangleBuffer;
function decomposeBitSet(bitset) {
    if (!Number.isInteger(bitset))
        throw Error('bitset must be integer');
    const result = new Set();
    for (let i = 0; bitset !== 0 && i < 32; i++) {
        const mask = 1 << i;
        if (bitset & mask) {
            result.add(mask);
            bitset ^= mask;
        }
    }
    return result;
}
exports.decomposeBitSet = decomposeBitSet;
