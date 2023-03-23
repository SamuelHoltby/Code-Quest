/**
 * We take the palindrome string, filter out all non-alphabetical characters, and then compare the filtered string to the
 * filtered string reversed
 * @param {string} palindrome - string - the string we're checking to see if it's a palindrome
 * @returns a boolean value.
 */
export const isPalindromeClassic = (palindrome: string): boolean => {
    const filteredPalindromeArray = palindrome.toLowerCase().match(/[a-z]/g)

    const filteredPalindrome = filteredPalindromeArray?.join('')
    const flippedPalindrome = filteredPalindromeArray?.reverse()?.join('')
    return filteredPalindrome === flippedPalindrome
}
