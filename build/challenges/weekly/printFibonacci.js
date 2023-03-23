"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFibonacci = void 0;
/**
 * It takes a number, and returns a string of the first n numbers in the Fibonacci sequence
 * @param {number} max - number - The maximum number of Fibonacci numbers to print.
 * @returns A string of the fibonacci sequence up to the max number
 */
const printFibonacci = (max) => {
    if (max === 1)
        return '1';
    else if (max === 2)
        return '1,1';
    const fibonacci = [BigInt(1), BigInt(1)];
    do {
        fibonacci.push(BigInt(fibonacci[fibonacci.length - 1]) +
            BigInt(fibonacci[fibonacci.length - 2]));
    } while (fibonacci.length < max);
    return fibonacci.join(',');
};
exports.printFibonacci = printFibonacci;
