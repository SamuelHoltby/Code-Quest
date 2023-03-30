type BitsType = 8 | 16 | 32

// Converts a number to binary with specified bit length
const numberToBinary = (number: number, bitLength: BitsType): string => {
    return number.toString(2).padStart(bitLength, '0');
};

// Performs bitwise AND operation on all numbers in the range [start, end] and returns the result as a number
export function bitwiseAndInRange(start: number, end: number, bitLength: BitsType = 16) {
    if (!Number.isInteger(bitLength) || bitLength <= 0) {
        throw new Error('bitLength must be a positive integer');
    }

    if (start > end) {
        throw new Error('Start is larger than end')
    }

    //convert number to binary then pad out 0 to binary length
    let startBinary = numberToBinary(start, bitLength)
    let endBinary = numberToBinary(end, bitLength)

    const startArray: number[] = [...startBinary].map((strNum) => parseInt(strNum))
    const endArray: number[] = [...endBinary].map((strNum) => parseInt(strNum))

    let result: string = '';

    for (let i = 0; i < startBinary.length; i++) {
        if ((startArray[i] & endArray[i]) === 1) {
            result += '1';
        } else {
            result += '0';
        }
    }

    //return binary as number
    return parseInt(result, 2)
}