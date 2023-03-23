"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyArrayElements = void 0;
const utils_1 = require("../../utils");
const classifyArrayElements = (array, orderTypes = false) => {
    const numbers = [];
    const letters = [];
    const misc = [];
    for (const arrayElement of array) {
        /**
         * It's checking the type of the array element, and then pushing it to the appropriate array.
         */
        switch (typeof arrayElement) {
            case 'number':
                numbers.push(arrayElement);
                break;
            case 'string':
                if (utils_1.isLetter.test(arrayElement)) {
                    letters.push(arrayElement);
                }
                else if (utils_1.isNumber.test(arrayElement)) {
                    numbers.push(parseFloat(arrayElement));
                }
                else {
                    misc.push(arrayElement);
                }
                break;
            default:
                misc.push(arrayElement);
                break;
        }
    }
    if (orderTypes) {
        numbers.sort((a, b) => a - b);
        letters.sort(utils_1.sortLetters);
        misc.sort(utils_1.sortLetters);
    }
    return [...numbers, ...letters, ...misc];
};
exports.classifyArrayElements = classifyArrayElements;
