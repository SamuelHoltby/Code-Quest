/**Write a function that takes in an array of numbers and returns an array with the first and last elements swapped.
 * Use destructuring and the Array.prototype.slice method to implement the solution.**/
export const firstLastSwap: (numbers: number[]) => number[] = (numbers) => {
    const [firstNumber] = numbers

    numbers[0] = numbers.slice(numbers.length - 1)?.[0]
    numbers[numbers.length - 1] = firstNumber

    return numbers

    /*
    * Alternative way
    * const { 0: first, [numbers.length - 1]: last, ...rest } = numbers;
      return [
        first,
        Object.values(rest),
        numbers.length > 1 ? last : undefined
      ];
    * */
}
