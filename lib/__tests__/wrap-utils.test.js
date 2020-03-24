"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../wrap-utils");
describe(wrap_utils_1.inWstrOfString, () => {
    it.each([
        ['', '0000'],
        ['*', '2a000000'],
        ['**', '2a002a000000'],
        ['test', '74006500730074000000'],
        ['téẞt', '7400e9009e1e74000000'],
    ])('%p encodes to %p', (input, expected) => {
        expect(wrap_utils_1.inWstrOfString(input)).toEqual(Buffer.from(expected, 'hex'));
    });
});
describe(wrap_utils_1.stringOfOutWstr, () => {
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
        expect(wrap_utils_1.stringOfOutWstr(Buffer.from(input, 'hex'))).toEqual(expected);
    });
});
