import { Return, Param } from '../functions'
import {
  ffiTypeOfReturn,
  ffiTypeOfParam,
  ffiBindingOfDescription,
} from '../binding-utils'

describe(ffiTypeOfReturn, () => {
  it.each([
    [Return.Void, 'void'],
    [Return.Int, 'int'],
    [Return.Hwnd, 'void*'],
  ])('return type %p is ffi type %p', (autoitReturn, ffiReturn) => {
    expect(ffiTypeOfReturn(autoitReturn)).toEqual(ffiReturn)
  })
})

describe(ffiTypeOfParam, () => {
  it.each([
    [Param.Int, 'int'],
    [Param.OutWstrSize, 'int'],
    [Param.SendMode, 'int'],
    [Param.Hwnd, 'void*'],
    [Param.OutRectangle, 'void*'],
    [Param.InWstr, 'uint16*'],
    [Param.InWstrCommand, 'uint16*'],
    [Param.InWstrCommandExtra, 'uint16*'],
    [Param.InWstrDescription, 'uint16*'],
    [Param.InWstrMouseButton, 'uint16*'],
    [Param.OutWstr, 'uint16*'],
  ])('param type %p is ffi type %p', (autoitParam, ffiParam) => {
    expect(ffiTypeOfParam(autoitParam)).toEqual(ffiParam)
  })
})

describe(ffiBindingOfDescription, () => {
  it.each([
    [
      [Return.Void, []],
      ['void', []],
    ],
    [
      [Return.Int, [['param', Param.Int]]],
      ['int', ['int']],
    ],
    [
      [
        Return.Hwnd,
        [
          ['title', Param.InWstrDescription],
          ['text', Param.InWstr],
          ['extra', Param.Int],
        ],
      ],
      ['void*', ['uint16*', 'uint16*', 'int']],
    ],
  ] as Array<[[Return, [string, Param][]], [string, string[]]]>)(
    'function type %j is ffi type %j',
    (autoitSignature, ffiSignature) => {
      expect(ffiBindingOfDescription(autoitSignature)).toEqual(ffiSignature)
    },
  )
})
