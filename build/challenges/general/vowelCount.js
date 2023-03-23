"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vowelCount = void 0;
/**
 * Write a function that takes in a string and returns the number of vowels (a, e, i, o, u) in the string.
 * Use regular expressions and the String.prototype.match method to implement the solution.
 */
const vowelCount = (string) => {
    const vowelArray = string.match(/[aeiou]/g);
    if (!vowelArray) {
        return false;
    }
    const vowelCounts = {};
    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel];
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1;
    }
    return vowelCounts;
};
exports.vowelCount = vowelCount;
