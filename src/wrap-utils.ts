Buffer.from

export function inWstrOfString(string: string): Buffer {
  const bufferLength = 2 + Buffer.byteLength(string, 'utf16le')
  const buffer = Buffer.allocUnsafe(bufferLength)
  buffer.write(string, 0, 'utf16le')
  buffer.writeUInt16LE(0x0000, bufferLength - 2)
  return buffer
}
