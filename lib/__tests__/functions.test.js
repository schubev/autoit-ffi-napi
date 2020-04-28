"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
describe(functions_1.winGetHandle, () => {
    function mockLibWinGetHandle(result) {
        return {
            AU3_WinGetHandle: jest
                .fn()
                .mockName('AU3_WinGetHandle')
                .mockResolvedValueOnce(result),
        };
    }
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('properly wraps the arguments', async () => {
        const lib = mockLibWinGetHandle(0);
        await functions_1.winGetHandle({ title: 'toto' }, 'some window contents', lib);
        expect(lib.AU3_WinGetHandle).toHaveBeenCalledTimes(1);
        expect(lib.AU3_WinGetHandle).toHaveBeenCalledWith(Buffer.from('5b005400490054004c0045003a0074006f0074006f005d000000', 'hex'), Buffer.from('73006f006d0065002000770069006e0064006f007700200063006f006e00740065006e00740073000000', 'hex'));
    });
    it('returns null if the lowlevel function returns null', async () => {
        const lib = mockLibWinGetHandle(0);
        const hwnd = await functions_1.winGetHandle({ title: 'toto' }, '', lib);
        expect(hwnd).toBe(null);
    });
    it('returns an Hwnd if the lowlevel function returns something nonnull', async () => {
        const lib = mockLibWinGetHandle(42);
        const hwnd = await functions_1.winGetHandle({ title: 'toto' }, '', lib);
        expect(hwnd).not.toBe(null);
        expect(hwnd === null || hwnd === void 0 ? void 0 : hwnd.toNumber()).toBe(42);
    });
});
