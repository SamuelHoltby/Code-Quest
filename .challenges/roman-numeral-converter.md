
## Roman numeral converter
![alt_text](images/js.png "image_tooltip")

Write a function that converts a given number to its Roman numeral equivalent.

Roman numerals are a numeral system used in ancient Rome that represent numbers using combinations of the following symbols:


```ts
I: 1
V: 5
X: 10
L: 50
C: 100
D: 500
M: 1000
```


Know the rules for forming Roman numerals:



* A smaller numeral in front of a larger numeral means subtraction, e.g., IV = 4 (5-1) and IX = 9 (10-1).
* A larger numeral followed by a smaller numeral means addition, e.g., VI = 6 (5+1) and VII = 7 (5+1+1).
* No numeral can appear more than three times in a row, e.g., 4 is represented as IV, not IIII.

Here are some unit tests to pass:


```ts
const toRomanNumeral = require('./toRomanNumeral');

test('converts 1 to "I"', () => {
  expect(toRomanNumeral(1)).toBe("I");
});

test('converts 4 to "IV"', () => {
  expect(toRomanNumeral(4)).toBe("IV");
});

test('converts 9 to "IX"', () => {
  expect(toRomanNumeral(9)).toBe("IX");
});

test('converts 10 to "X"', () => {
  expect(toRomanNumeral(10)).toBe("X");
});

test('converts 40 to "XL"', () => {
  expect(toRomanNumeral(40)).toBe("XL");
});

test('converts 50 to "L"', () => {
  expect(toRomanNumeral(50)).toBe("L");
});

test('converts 90 to "XC"', () => {
  expect(toRomanNumeral(90)).toBe("XC");
});

test('converts 100 to "C"', () => {
  expect(toRomanNumeral(100)).toBe("C");
});

test('converts 400 to "CD"', () => {
  expect(toRomanNumeral(400)).toBe("CD");
});

test('converts 500 to "D"', () => {
  expect(toRomanNumeral(500)).toBe("D");
});

test('converts 900 to "CM"', () => {
  expect(toRomanNumeral(900)).toBe("CM");
});

test('converts 1000 to "M"', () => {
  expect(toRomanNumeral(1000)).toBe("M");
});

test('converts 3999 to MMMCMXCIX"', () => {
  expect(toRomanNumeral(3999)).toBe("MMMCMXCIX");
});

test('throws an error for values outside the range of 1 to 3999', () => {
  expect(() => { toRomanNumeral(0) }).toThrowError('Value must be between 1 and 3999');
  expect(() => { toRomanNumeral(4000) }).toThrowError('Value must be between 1 and 3999');
  expect(() => { toRomanNumeral(-10) }).toThrowError('Value must be between 1 and 3999');
});
```


Assuming that the Roman numeral converter function is named `toRomanNumeral`, these tests will test a range of input values from 1 to 3999, including edge cases like 4 and 9, which require special Roman numeral notation. The final test ensures that the function throws an error if the input value is outside the valid range of 1 to 3999.

Make sure to modify the function name and the require statement to match your implementation.

**Why 3999?**

The largest number that can be represented in Roman numerals using the standard symbols is 3,999, which is represented as "MMMCMXCIX". This is because the Roman numeral system uses letters from the Latin alphabet to represent numbers, and the largest symbol used in the system is M, which represents 1,000. To represent numbers larger than 1,000, additional symbols are added to the left of the M symbol. The symbols used to represent numbers in the Roman numeral system have some limitations, which makes it impractical to represent numbers larger than 3,999 using the standard symbols. Therefore, 3,999 is a good upper limit for testing a Roman numeral converter function that uses the standard symbols.
