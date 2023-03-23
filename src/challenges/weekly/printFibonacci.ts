/**
 * It takes a number, and returns a string of the first n numbers in the Fibonacci sequence
 * @param {number} max - number - The maximum number of Fibonacci numbers to print.
 * @returns A string of the fibonacci sequence up to the max number
 */
export const printFibonacci = (max: number): string => {
    if (max === 1) return '1'
    else if (max === 2) return '1,1'

    const fibonacci: bigint[] = [BigInt(1), BigInt(1)]

    do {
        fibonacci.push(
            BigInt(fibonacci[fibonacci.length - 1]) +
                BigInt(fibonacci[fibonacci.length - 2])
        )
    } while (fibonacci.length < max)

    return fibonacci.join(',')
}
