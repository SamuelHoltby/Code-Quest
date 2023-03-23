"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleTripleEvenOddNumbers = void 0;
/**
 * Write a function that takes in an array of numbers and returns a new array with the even numbers doubled and the
 * odd numbers tripled. Use the Array.prototype.map method to implement the solution.
 */
const doubleTripleEvenOddNumbers = (array) => array.map((number) => {
    return number * (number % 2 === 0 ? 2 : 3);
});
exports.doubleTripleEvenOddNumbers = doubleTripleEvenOddNumbers;
