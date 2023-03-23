import { isLetter, isNumber, sortLetters } from '../../utils'

/**
 * It takes an array of strings and numbers, sorts the numbers, sorts the letters, and sorts the other elements, and
 * returns a new array with the sorted elements
 * @param {(string | number)[]} array - The array to be sorted.
 * @param [orderTypes=false] - If true, the numbers, letters, and misc will be sorted.
 * @returns array with ordered types
 */
type ArrayOfStringOrNumber = (string | number)[]

export const classifyArrayElements = (
    array: ArrayOfStringOrNumber,
    orderTypes = false
): ArrayOfStringOrNumber => {
    const numbers: number[] = []
    const letters: string[] = []
    const misc: string[] = []

    for (const arrayElement of array) {
        /**
         * It's checking the type of the array element, and then pushing it to the appropriate array.
         */
        switch (typeof arrayElement) {
            case 'number':
                numbers.push(arrayElement)
                break
            case 'string':
                if (isLetter.test(arrayElement)) {
                    letters.push(arrayElement)
                } else if (isNumber.test(arrayElement)) {
                    numbers.push(parseFloat(arrayElement))
                } else {
                    misc.push(arrayElement)
                }
                break
            default:
                misc.push(arrayElement)
                break
        }
    }

    if (orderTypes) {
        numbers.sort((a, b) => a - b)
        letters.sort(sortLetters)
        misc.sort(sortLetters)
    }

    return [...numbers, ...letters, ...misc]
}
