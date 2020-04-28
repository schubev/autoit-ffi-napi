import { inWstrOfString, stringOfOutWstr, decomposeBitSet } from '../wrap-utils'

describe(inWstrOfString, () => {
  it.each([
    ['', '0000'],
    ['*', '2a000000'],
    ['**', '2a002a000000'],
    ['test', '74006500730074000000'],
    ['téẞt', '7400e9009e1e74000000'],
  ])('%p encodes to %p', (input, expected) => {
    expect(inWstrOfString(input)).toEqual(Buffer.from(expected, 'hex'))
  })
})

describe(stringOfOutWstr, () => {
  it.each([
    ['', ''],
    ['0000', ''],
    ['2a00', '*'],
    ['2a000000', '*'],
    ['2a0000000000', '*'],
    ['2a0000002a000000', '*'],
    ['3ed884dd0000', '🦄'],
    ['3ed884dd75006e00690063006f0072006e00', '🦄unicorn'],
    ['3ed884dd75006e00690063006f0072006e000000', '🦄unicorn'],
  ])('%p decodes to %p', (input, expected) => {
    expect(stringOfOutWstr(Buffer.from(input, 'hex'))).toEqual(expected)
  })
})

describe(decomposeBitSet, () => {
  it.each([
    [0, []],
    [1, [1]],
    [2, [2]],
    [4, [4]],
    [8, [8]],
    [16, [16]],
    [32, [32]],
    [3, [1, 2]],
    [7, [1, 2, 4]],
    [9, [1, 8]],
  ])('%p decomposes to %p', (input, expected) => {
    expect(decomposeBitSet(input)).toEqual(new Set(expected))
  })
})
