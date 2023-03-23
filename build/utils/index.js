"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isLetter = exports.sortLetters = void 0;
const sortLetters = (a, b) => {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    return 0;
};
exports.sortLetters = sortLetters;
exports.isLetter = new RegExp(/[A-Za-z]/);
exports.isNumber = new RegExp(/[0-9]/);
