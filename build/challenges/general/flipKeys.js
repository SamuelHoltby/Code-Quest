"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flipKeys = void 0;
/**Write a function that takes in an object and returns a new object with all the keys and values flipped.
 * Use destructuring and the Object.entries and Object.fromEntries methods to implement the solution.**/
const flipKeys = (object) => {
    const array = Object.entries(object).map(([key, value]) => [value, key]);
    return Object.fromEntries(array);
};
exports.flipKeys = flipKeys;
