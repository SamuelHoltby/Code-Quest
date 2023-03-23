"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * We take a string, filter out all non-alphabetical characters, and then compare the filtered string to the filtered
 * string reversed
 * @param {string} palindrome - string - the string we're checking to see if it's a palindrome
 * @returns A boolean value
 */
const isPalindrome = (palindrome) => {
    const filteredPalindromeArray = palindrome.toLowerCase().match(/[a-z]/g);
    const filteredPalindrome = filteredPalindromeArray === null || filteredPalindromeArray === void 0 ? void 0 : filteredPalindromeArray.join('');
    const flippedPalindrome = filteredPalindromeArray === null || filteredPalindromeArray === void 0 ? void 0 : filteredPalindromeArray.reduce((reversed, character) => character + reversed, '');
    return filteredPalindrome === flippedPalindrome;
};
exports.isPalindrome = isPalindrome;
