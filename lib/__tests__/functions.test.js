"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('../lowlevel');
jest.mock('ref');
const functions_1 = require("../functions");
const lowlevel_1 = require("../lowlevel");
describe(functions_1.winGetHandle, () => {
    function mockWinGetHandle(result) {
        lowlevel_1.lib.AU3_WinGetHandle.async.mockImplementationOnce((_window, _text, callback) => callback(null, result));
    }
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('properly wraps the arguments', async () => {
        mockWinGetHandle(0);
        await functions_1.winGetHandle({ title: 'toto' }, 'some window contents');
        expect(lowlevel_1.lib.AU3_WinGetHandle.async).toHaveBeenCalledTimes(1);
        expect(lowlevel_1.lib.AU3_WinGetHandle.async).toHaveBeenCalledWith(Buffer.from('5b005400490054004c0045003a0074006f0074006f005d000000', 'hex'), Buffer.from('73006f006d0065002000770069006e0064006f007700200063006f006e00740065006e00740073000000', 'hex'), expect.anything());
    });
    it('returns null if the lowlevel function returns null', async () => {
        mockWinGetHandle(0);
        const hwnd = await functions_1.winGetHandle({ title: 'toto' }, '');
        expect(hwnd).toBe(null);
    });
    it('returns an Hwnd if the lowlevel function returns something nonnull', async () => {
        var _a;
        mockWinGetHandle(42);
        const hwnd = await functions_1.winGetHandle({ title: 'toto' }, '');
        expect(hwnd).not.toBe(null);
        expect((_a = hwnd) === null || _a === void 0 ? void 0 : _a.toNumber()).toBe(42);
    });
});
