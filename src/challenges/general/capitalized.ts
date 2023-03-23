/**Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
 * Use template literals and the String.prototype.split and String.prototype.toUpperCase methods to implement
 * the solution.**/
export const capitalized: (text: string) => string = (text) => {
    return text
        .split(' ')
        .map((word) => {
            const [firstLetter, ...rest] = word
            const restOfWord = rest.join('')
            return `${firstLetter.toUpperCase()}${restOfWord}`
        })
        .join(' ')
}
