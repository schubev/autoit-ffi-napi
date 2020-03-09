"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_defs_1 = require("../codegen/function-defs");
exports.lib = {};
for (const functionName in function_defs_1.functions) {
    exports.lib[functionName] = { async: jest.fn().mockName(functionName) };
}
