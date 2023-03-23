"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstLastSwap = void 0;
/**Write a function that takes in an array of numbers and returns an array with the first and last elements swapped.
 * Use destructuring and the Array.prototype.slice method to implement the solution.**/
const firstLastSwap = (numbers) => {
    var _a;
    const [firstNumber] = numbers;
    numbers[0] = (_a = numbers.slice(numbers.length - 1)) === null || _a === void 0 ? void 0 : _a[0];
    numbers[numbers.length - 1] = firstNumber;
    return numbers;
    /*
    * Alternative way
    * const { 0: first, [numbers.length - 1]: last, ...rest } = numbers;
      return [
        first,
        Object.values(rest),
        numbers.length > 1 ? last : undefined
      ];
    * */
};
exports.firstLastSwap = firstLastSwap;
