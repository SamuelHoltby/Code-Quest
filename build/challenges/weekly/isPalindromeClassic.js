"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromeClassic = void 0;
/**
 * We take the palindrome string, filter out all non-alphabetical characters, and then compare the filtered string to the
 * filtered string reversed
 * @param {string} palindrome - string - the string we're checking to see if it's a palindrome
 * @returns a boolean value.
 */
const isPalindromeClassic = (palindrome) => {
    var _a;
    const filteredPalindromeArray = palindrome.toLowerCase().match(/[a-z]/g);
    const filteredPalindrome = filteredPalindromeArray === null || filteredPalindromeArray === void 0 ? void 0 : filteredPalindromeArray.join('');
    const flippedPalindrome = (_a = filteredPalindromeArray === null || filteredPalindromeArray === void 0 ? void 0 : filteredPalindromeArray.reverse()) === null || _a === void 0 ? void 0 : _a.join('');
    return filteredPalindrome === flippedPalindrome;
};
exports.isPalindromeClassic = isPalindromeClassic;
