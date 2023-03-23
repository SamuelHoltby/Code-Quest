"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalized = void 0;
/**Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
 * Use template literals and the String.prototype.split and String.prototype.toUpperCase methods to implement
 * the solution.**/
const capitalized = (text) => {
    return text
        .split(' ')
        .map((word) => {
        const [firstLetter, ...rest] = word;
        const restOfWord = rest.join('');
        return `${firstLetter.toUpperCase()}${restOfWord}`;
    })
        .join(' ');
};
exports.capitalized = capitalized;
