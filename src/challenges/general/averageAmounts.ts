import { ObjectWithNumericValues } from '../../utils'

/**Write a function that takes in an array of objects and returns an object with the average value for each key.
 * Use destructuring and the Array.prototype.reduce method to implement the solution.
 *
 * const arrayOfObjects = [  { a: 1, b: 2, c: 3 },  { a: 4, b: 5, c: 6 },  { a: 7, b: 8, c: 9 }];
 * **/
//TODO: not happy with this one, need to redo.
export const averageAmounts: (
    objectArray: object[]
) => ObjectWithNumericValues = (objectArray) => {
    const result: ObjectWithNumericValues = objectArray.reduce(
        (acc: ObjectWithNumericValues, currentObject: Record<string, any>) => {
            for (const objectKey in currentObject) {
                if (acc.hasOwnProperty(objectKey)) {
                    acc[objectKey] += currentObject[objectKey]
                } else {
                    acc[objectKey] = currentObject[objectKey]
                }
            }
            return acc
        },
        {}
    )

    result &&
        Object.entries(result).forEach(
            ([key, value]) => (result[key] = value / objectArray.length)
        )

    return result
}
