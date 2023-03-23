/**
 * It takes a string and returns the longest alphabetical substring
 * @param {string} text - the string to search through
 * @returns The longest alphabetical substring in the given string.
 */
export const findLongestAlphabetLike = (text: string): string => {
    const abc = [...'abcdefghijklmnopqrstuvwxyz']

    let track = ''

    for (const letter of abc) {
        if (text.search(track + letter) === -1) {
            break
        }

        track += letter
    }

    return track
}
