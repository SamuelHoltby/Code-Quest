import { averageAmounts } from './challenges/general/averageAmounts'
import { capitalized } from './challenges/general/capitalized'
import { doubleTripleEvenOddNumbers } from './challenges/general/doubleTripleEvenOddNumbers'
import { firstLastSwap } from './challenges/general/firstLastSwap'
import { flipKeys } from './challenges/general/flipKeys'
import { mostCommonLetter } from './challenges/general/mostCommonLetter'
import { secondSmallest } from './challenges/general/secondSmallest'
import { vowelCount } from './challenges/general/vowelCount'

describe('General JS Test questions', () => {
    it('Should return array with double evens and triple odds', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const expectedArray = [3, 4, 9, 8, 15, 12, 21, 16, 27, 20]

        expect(doubleTripleEvenOddNumbers(array)).toEqual(expectedArray)
    })

    it('Should return vowel count', () => {
        const vowels = 'aaeeiioouuuuuu'
        const expectedVowels = { a: 2, e: 2, i: 2, o: 2, u: 6 }

        expect(vowelCount(vowels)).toEqual(expectedVowels)
    })

    it('Should return average amounts', () => {
        const arrayOfObjects = [
            { a: 1, b: 2, c: 3 },
            { a: 4, b: 5, c: 6 },
            { a: 7, b: 8, c: 9 },
        ]
        const expectedAverageAmounts = { a: 4, b: 5, c: 6 }
        const res = averageAmounts(arrayOfObjects)

        expect(res).toEqual(expectedAverageAmounts)
    })

    it('Should return capitalized text', () => {
        const text = 'This is a test'
        const expectedText = 'This Is A Test'
        const res = capitalized(text)

        expect(res).toEqual(expectedText)
    })

    it('Should return swapped first and last number', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const expectedNumbers = [9, 2, 3, 4, 5, 6, 7, 8, 1]
        const res = firstLastSwap(numbers)

        expect(res).toEqual(expectedNumbers)
    })

    it('Should return second smallest number', () => {
        expect(secondSmallest([25, 33, 1000, 41, 11, 55])).toEqual(25)
        expect(secondSmallest([15, 2, 1000])).toEqual(15)
    })

    it('Should return flipped keys ', () => {
        const object = { a: 1, e: 2, i: 3, o: 4, u: 5 }
        const ExpectedResult = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }
        const res = flipKeys(object)

        expect(res).toEqual(ExpectedResult)
    })

    it('Should return common letter ', () => {
        const string = 'This is a tests'
        const ExpectedResult = 's'
        const res = mostCommonLetter(string)

        expect(res).toEqual(ExpectedResult)
    })
})
