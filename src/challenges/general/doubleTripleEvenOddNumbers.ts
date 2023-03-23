/**
 * Write a function that takes in an array of numbers and returns a new array with the even numbers doubled and the
 * odd numbers tripled. Use the Array.prototype.map method to implement the solution.
 */
export const doubleTripleEvenOddNumbers: (array: Array<number>) => number[] = (
    array
) =>
    array.map((number) => {
        return number * (number % 2 === 0 ? 2 : 3)
    })
