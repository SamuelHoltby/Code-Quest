"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondSmallest = void 0;
/**Write a function that takes in an array of numbers and returns the second-smallest number in the array.
 * Use the Array.prototype.sort method to implement the solution.**/
const secondSmallest = (numberArray) => {
    const sorted = numberArray.sort((a, b) => a - b);
    return sorted.length > 2 ? sorted[1] : sorted[0];
};
exports.secondSmallest = secondSmallest;
