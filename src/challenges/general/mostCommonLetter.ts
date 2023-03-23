import { ObjectWithNumericValues } from '../../utils'

/**Write a function that takes in a string and returns the most common letter in the string.
 * Use the Array.prototype.reduce method to implement the solution.**/
// @ts-ignore
export const mostCommonLetter: (text: string) => string = (text) => {
    const vowelArray = text.toLowerCase().match(/[a-z]/gi)

    if (!vowelArray) {
        return false
    }

    const vowelCounts: ObjectWithNumericValues = {}

    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel]
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1
    }

    return Object.entries(vowelCounts).reduce((accum, current) => {
        const [, currentCount] = current
        const [, accumCount] = accum

        return currentCount > accumCount ? current : accum
    })?.[0]
}
