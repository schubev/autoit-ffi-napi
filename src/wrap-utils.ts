import { WindowDescription, descriptor } from 'autoit-advanced-descriptor'
import { Rectangle, Point } from './types'

export function inWstrOfString(string: string): Buffer {
  const bufferLength = 2 + Buffer.byteLength(string, 'utf16le')
  const buffer = Buffer.allocUnsafe(bufferLength)
  buffer.write(string, 0, 'utf16le')
  buffer.writeUInt16LE(0x0000, bufferLength - 2)
  return buffer
}

export function inWstrOfWindowDescription(
  description: string | WindowDescription,
): Buffer {
  if (typeof description === 'string') return inWstrOfString(description)
  else return inWstrOfString(descriptor(description))
}

export function outWstrOfSize(size: number): Buffer {
  return Buffer.alloc(size * 2)
}

export function stringOfOutWstr(buffer: Buffer): string {
  const rawString = buffer.toString('utf16le')
  const rawStringEnd = rawString.indexOf('\u0000')
  if (rawStringEnd === -1) return rawString
  else return rawString.slice(0, rawStringEnd)
}

export function outWstrResolver(
  outBuffer: Buffer,
  resolve: (outString: string) => void,
): () => void {
  return function resolveOutWstr(): void {
    resolve(stringOfOutWstr(outBuffer))
  }
}

export async function outPointBuffer(): Promise<Buffer> {
  const { types } = await import('ref')
  const longAlignment = types.long.alignment
  if (longAlignment !== 4) throw Error('long alignment is not 4')
  return Buffer.alloc(2 * longAlignment)
}

export async function pointOfPointBuffer(buffer: Buffer): Promise<Point> {
  const { types } = await import('ref')
  const longAlignment = types.long.alignment
  if (longAlignment !== 4) throw Error('long alignment is not 4')
  if (buffer.length !== 2 * longAlignment)
    throw Error('buffer has unexpected size')
  return Point.ofCartesian(buffer.readInt32LE(0), buffer.readInt32LE(4))
}

export async function outRectangleBuffer(): Promise<Buffer> {
  const { types } = await import('ref')
  const longAlignment = types.long.alignment
  if (longAlignment !== 4) throw Error('long alignment is not 4')
  return Buffer.alloc(4 * longAlignment)
}

export async function rectangleOfRectangleBuffer(
  buffer: Buffer,
): Promise<Rectangle> {
  const { types } = await import('ref')
  const longAlignment = types.long.alignment
  if (longAlignment !== 4) throw Error('long alignment is not 4')
  if (buffer.length !== 4 * longAlignment)
    throw Error('buffer has unexpected size')
  return Rectangle.ofCorners(
    buffer.readInt32LE(0),
    buffer.readInt32LE(4),
    buffer.readInt32LE(8),
    buffer.readInt32LE(12),
  )
}

export function decomposeBitSet(bitset: number): Set<number> {
  if (!Number.isInteger(bitset)) throw Error('bitset must be integer')
  const result: Set<number> = new Set()
  for (let i = 0; bitset !== 0 && i < 32; i++) {
    const mask = 1 << i
    if (bitset & mask) {
      result.add(mask)
      bitset ^= mask
    }
  }
  return result
}
