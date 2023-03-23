"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostCommonLetter = void 0;
/**Write a function that takes in a string and returns the most common letter in the string.
 * Use the Array.prototype.reduce method to implement the solution.**/
// @ts-ignore
const mostCommonLetter = (text) => {
    var _a;
    const vowelArray = text.toLowerCase().match(/[a-z]/gi);
    if (!vowelArray) {
        return false;
    }
    const vowelCounts = {};
    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel];
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1;
    }
    return (_a = Object.entries(vowelCounts).reduce((accum, current) => {
        const [, currentCount] = current;
        const [, accumCount] = accum;
        return currentCount > accumCount ? current : accum;
    })) === null || _a === void 0 ? void 0 : _a[0];
};
exports.mostCommonLetter = mostCommonLetter;
