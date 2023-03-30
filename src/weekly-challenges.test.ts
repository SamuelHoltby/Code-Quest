import {classifyArrayElements} from './challenges/weekly/classifyArrayElements'
import {fib100} from './challenges/weekly/fib'
import {fibonacciNumber} from './challenges/weekly/fibonacciNumber'
import {findLongestAlphabetLike} from './challenges/weekly/findLongestAlphabetLike'
import {isBalanced} from './challenges/weekly/isBalanced'
import {isPalindrome} from './challenges/weekly/isPalindrome'
import {printFibonacci} from './challenges/weekly/printFibonacci'
import {
    rotate2DMatrixClockwise,
    rotate3x3_2DMatrixClockwise,
} from './challenges/weekly/rotate2DMatrixClockwise'
import {bitwiseAndInRange} from "./challenges/weekly/bitwiseAndInRange";

describe('Weekly Challenges', () => {
    it('Should return printFibonacci', () => {
        expect(printFibonacci(1)).toEqual('1')
        expect(printFibonacci(2)).toEqual('1,1')
        expect(printFibonacci(3)).toEqual('1,1,2')
        expect(printFibonacci(5)).toEqual('1,1,2,3,5')
        expect(printFibonacci(10)).toEqual('1,1,2,3,5,8,13,21,34,55')
        expect(printFibonacci(100)).toEqual(fib100)
    })

    it('Should return fibonacciNumber', () => {
        expect(fibonacciNumber(1)).toEqual('1')
        expect(fibonacciNumber(2)).toEqual('1')
        expect(fibonacciNumber(3)).toEqual('2')
        expect(fibonacciNumber(5)).toEqual('5')
        expect(fibonacciNumber(6)).toEqual('8')
        expect(fibonacciNumber(100)).toEqual('354224848179261915075')
    })

    it('Should return whether strings are palindromes', () => {
        const englishPalindromes = [
            'Deified',
            'A man, a plan, a canal, Panama!',
            'Was it a car or a cat I saw?',
            "Madam, in Eden, I'm Adam",
            'Able was I ere I saw Elba',
            'Radar',
            'A Santa at NASA',
            'Mr. Owl ate my metal worm',
            "A Toyota's a Toyota",
            'Ma is a nun, as I am',
            'Racecar',
            "Don't nod",
            'Eva, can I see bees in a cave?',
            'Do geese see God?',
            'Level',
            'Never odd or even',
            'No lemons, no melon',
            'Rats live on no evil star',
            'Step on no pets',
            'Was it a rat I saw?',
        ]

        englishPalindromes.forEach((palindrome) => {
            expect(isPalindrome(palindrome)).toEqual(true)
        })

        const words = ['Test', 'Pizza', 'Laptop', 'Headphones']
        words.forEach((word) => {
            expect(isPalindrome(word)).toEqual(false)
        })
    })

    it('Should return longest alphabet link', () => {
        const result = findLongestAlphabetLike('abbbcabcdefefg')
        expect(result).toEqual('abcdef')
        expect(result.length).toEqual(6)
    })

    it('Should return array as numbers, letter, misc', () => {
        //order numbers and letters
        expect(
            classifyArrayElements([2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1])
        ).toEqual([2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e'])

        //order numbers, letters, and misc
        expect(
            classifyArrayElements([
                2,
                'b',
                '!',
                4,
                'd',
                '&',
                3,
                'a',
                'c',
                '😃',
                'e',
                5,
                1,
            ])
        ).toEqual([2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e', '!', '&', '😃'])

        //order types as well
        expect(
            classifyArrayElements(
                [2, '3', 'b', '!', 4, 'd', '&', 3, 'a', 'c', '😃', 'e', 5, 1],
                true
            )
        ).toEqual([1, 2, 3, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', '!', '&', '😃'])
    })

    it('Should rotate 2D matrix array clockwise', () => {
        expect(
            rotate3x3_2DMatrixClockwise([
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ])
        ).toEqual([
            [6, 3, 0],
            [7, 4, 1],
            [8, 5, 2],
        ])

        expect(
            rotate2DMatrixClockwise([
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
                [12, 13, 14, 15],
            ])
        ).toEqual([
            [12, 8, 4, 0],
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
        ])
    })
})

describe('Weekly Challenges - Balanced Brackets', () => {
    it('well-formed string returns true', () => {
        expect(isBalanced('{[(testing)]}')).toBe(true)
    })

    it('malformed string returns false', () => {
        expect(isBalanced('{[()]}]')).toBe(false)
    })

    it('empty string returns true', () => {
        expect(isBalanced('')).toBe(true)
    })

    it('string with only opening brackets returns false', () => {
        expect(isBalanced('(((')).toBe(false)
    })

    it('string with only closing brackets returns false', () => {
        expect(isBalanced(')))')).toBe(false)
    })

    it('string with mixed brackets returns false', () => {
        expect(isBalanced('{[(]}')).toBe(false)
    })
})


describe('Weekly Challenges - Bitwise Operators', () => {
    it('should throw error', () => {
        expect(() => bitwiseAndInRange(0, 2, -10)).toThrow('bitLength must be a positive integer')
        expect(() => bitwiseAndInRange(3, 2)).toThrow('Start is larger than end')
    });

    it('should return the bitwise AND of all integers between 0 and 2 (inclusive)', () => {
        expect(bitwiseAndInRange(0, 2)).toBe(0);
    });

    it('should return the bitwise AND of all integers between 1 and 3 (inclusive)', () => {
        expect(bitwiseAndInRange(1, 3)).toBe(1);
    });

    it('should return the bitwise AND of all integers between 2 and 5 (inclusive)', () => {
        expect(bitwiseAndInRange(2, 5)).toBe(0);
    });

    it('should return the bitwise AND of all integers between 10 and 15 (inclusive)', () => {
        expect(bitwiseAndInRange(10, 15)).toBe(10);
    });

    it('should return the bitwise AND of all integers between 0 and 65535 (inclusive)', () => {
        expect(bitwiseAndInRange(0, 65535)).toBe(0);
    });
});