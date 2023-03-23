/**
 * We take a string, filter out all non-alphabetical characters, and then compare the filtered string to the filtered
 * string reversed
 * @param {string} palindrome - string - the string we're checking to see if it's a palindrome
 * @returns A boolean value
 */
export const isPalindrome = (palindrome: string): boolean => {
    const filteredPalindromeArray = palindrome.toLowerCase().match(/[a-z]/g)

    const filteredPalindrome = filteredPalindromeArray?.join('')
    const flippedPalindrome = filteredPalindromeArray?.reduce(
        (reversed, character) => character + reversed,
        ''
    )

    return filteredPalindrome === flippedPalindrome
}
