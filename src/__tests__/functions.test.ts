jest.mock('../lowlevel')

import { winGetHandle } from '../functions'
import { lib } from '../lowlevel'

describe(winGetHandle, () => {
  function mockWinGetHandle(result: number): void {
    lib.AU3_WinGetHandle.async.mockImplementationOnce(
      (
        _window: string,
        _text: string,
        callback: (err: Error | null, result: number) => void,
      ) => callback(null, result),
    )
  }

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('properly wraps the arguments', async () => {
    mockWinGetHandle(0)
    await winGetHandle({ title: 'toto' }, 'some window contents')
    expect(lib.AU3_WinGetHandle.async).toHaveBeenCalledTimes(1)
    expect(lib.AU3_WinGetHandle.async).toHaveBeenCalledWith(
      Buffer.from(
        '5b005400490054004c0045003a0074006f0074006f005d000000',
        'hex',
      ),
      Buffer.from(
        '73006f006d0065002000770069006e0064006f007700200063006f006e00740065006e00740073000000',
        'hex',
      ),
      expect.anything(),
    )
  })

  it('returns null if the lowlevel function returns null', async () => {
    mockWinGetHandle(0)
    const hwnd = await winGetHandle({ title: 'toto' }, '')
    expect(hwnd).toBe(null)
  })

  it('returns an Hwnd if the lowlevel function returns something nonnull', async () => {
    mockWinGetHandle(42)
    const hwnd = await winGetHandle({ title: 'toto' }, '')
    expect(hwnd).not.toBe(null)
    expect(hwnd?.toNumber()).toBe(42)
  })
})
