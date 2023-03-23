/**
 * It takes a number, and returns the fibonacci number at that position
 * @param {number} max - The number of the Fibonacci sequence you want to find.
 * @returns The nth number in the fibonacci sequence
 */
export const fibonacciNumber = (max: number): string => {
    if (max === 1) return '1'
    else if (max === 2) return '1'

    let fibonacci: number | bigint = 0
    let numberMinus2: number | bigint = 1
    let numberMinus1: number | bigint = 1

    let count = 2
    do {
        fibonacci = BigInt(numberMinus1) + BigInt(numberMinus2)
        numberMinus2 = numberMinus1
        numberMinus1 = fibonacci
        count++
    } while (count < max)

    return BigInt(fibonacci).toString()
}
