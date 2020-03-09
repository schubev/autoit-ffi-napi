jest.mock('../lowlevel')

import { winGetHandle } from '../functions'
import { lib } from '../lowlevel'

describe(winGetHandle, () => {
  it('returns null if the lowlevel function returns null', async () => {
    lib.AU3_WinGetHandle.async.mockImplementationOnce(
      (
        _window: string,
        _text: string,
        callback: (err: Error | null, result: number) => void,
      ) => callback(null, 0),
    )
    expect(await winGetHandle({ title: 'toto' }, '')).toBe(null)
    expect(lib.AU3_WinGetHandle.async).toHaveBeenCalledTimes(1)
    expect(lib.AU3_WinGetHandle.async).toHaveBeenCalledWith(
      Buffer.from(
        '5b005400490054004c0045003a0074006f0074006f005d000000',
        'hex',
      ),
      Buffer.from('0000', 'hex'),
      expect.anything(),
    )
  })
})
