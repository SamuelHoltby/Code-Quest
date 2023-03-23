"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacciNumber = void 0;
/**
 * It takes a number, and returns the fibonacci number at that position
 * @param {number} max - The number of the Fibonacci sequence you want to find.
 * @returns The nth number in the fibonacci sequence
 */
const fibonacciNumber = (max) => {
    if (max === 1)
        return '1';
    else if (max === 2)
        return '1';
    let fibonacci = 0;
    let numberMinus2 = 1;
    let numberMinus1 = 1;
    let count = 2;
    do {
        fibonacci = BigInt(numberMinus1) + BigInt(numberMinus2);
        numberMinus2 = numberMinus1;
        numberMinus1 = fibonacci;
        count++;
    } while (count < max);
    return BigInt(fibonacci).toString();
};
exports.fibonacciNumber = fibonacciNumber;
