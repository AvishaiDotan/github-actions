"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('Sum function', () => {
    (0, globals_1.test)('Returns correct value', () => {
        (0, globals_1.expect)((0, index_1.sum)(2, 3)).toEqual(5);
    });
});
