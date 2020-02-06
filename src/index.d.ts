declare module 'ffi-napi' {
  export type Signature = [string, string[]]
  export function Library(
    path: string,
    symbols: Record<string, [string, string[]]>,
  ): Record<string, any>
}
