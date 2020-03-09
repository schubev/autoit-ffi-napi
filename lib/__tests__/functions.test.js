"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('../lowlevel');
const functions_1 = require("../functions");
const lowlevel_1 = require("../lowlevel");
describe(functions_1.winGetHandle, () => {
    it('returns null if the lowlevel function returns null', async () => {
        lowlevel_1.lib.AU3_WinGetHandle.async.mockImplementationOnce((_window, _text, callback) => callback(null, 0));
        expect(await functions_1.winGetHandle({ title: 'toto' }, '')).toBe(null);
        expect(lowlevel_1.lib.AU3_WinGetHandle.async).toHaveBeenCalledTimes(1);
        expect(lowlevel_1.lib.AU3_WinGetHandle.async).toHaveBeenCalledWith(Buffer.from('5b005400490054004c0045003a0074006f0074006f005d000000', 'hex'), Buffer.from('0000', 'hex'), expect.anything());
    });
});
