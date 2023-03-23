export const sortLetters = (a: string, b: string) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    }

    return 0
}
export type ObjectWithNumericValues = {
    [key: string]: number
}

export const isLetter = new RegExp(/[A-Za-z]/)
export const isNumber = new RegExp(/[0-9]/)
