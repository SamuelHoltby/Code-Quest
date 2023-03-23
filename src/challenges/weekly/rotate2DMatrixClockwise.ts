/**
 * We're taking the first column of the matrix and making it the first row of the new matrix, the second column of the matrix and
 * making it the second row of the new matrix, and the third column of the matrix and making it the third row of the new matrix.
 * @param matrix - number[][]
 * @returns A new matrix with the values rotated clockwise.
 */
export const rotate3x3_2DMatrixClockwise: (matrix: number[][]) => number[][] = (
    matrix
) => {
    const [a1, b1, c1] = matrix[0]
    const [a2, b2, c2] = matrix[1]
    const [a3, b3, c3] = matrix[2]

    return [
        [a3, a2, a1],
        [b3, b2, b1],
        [c3, c2, c1],
    ]
}

export const rotate2DMatrixClockwise: (matrix: number[][]) => number[][] = (
    matrix
) => {
    const size = matrix.length

    const newMatrix = Array.from({ length: size }, () =>
        new Array(size).fill(0)
    )

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            newMatrix[j][size - 1 - i] = matrix[i][j]
        }
    }

    return newMatrix
}
