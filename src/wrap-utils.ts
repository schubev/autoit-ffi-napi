import { WindowDescription, descriptor } from 'autoit-advanced-descriptor'

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
