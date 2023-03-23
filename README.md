# Code-Quest

This repository is a collection of various JavaScript challenges aimed at improving and testing one's knowledge of the language.
It serves as a playground for practicing and refining JavaScript skills while also demonstrating the power of unit testing using
Jest, a popular testing library for JavaScript.

I'll post a **new coding challenge each week**, see below. These challenges should only take 10-30 minutes to complete, as I ain't got no time
for hour long challenges.

Here are all the challenges if you fancy having a look: [All challenges](.challenges/Challenges.md).

My attempt at each challenge can be found within [`src/weekly-challenges.test.ts`](src/weekly-challenges.test.ts)


## 24/03/2023 - weekly challenge

### Balanced Brackets

![](.challenges/images/js.png)

Write a function that takes a string of brackets as input and returns true if the string is well-formed, and false otherwise.

For example, given the input string `{[()]}`, the function should return true. Given the input string `{[()]}]`, the function
should return false.

You can use the isBalanced function I provided earlier as a starting point. Here's an example unit tests using the Jest testing
framework:

```ts
const isBalanced = require('./isBalanced');

test('well-formed string returns true', () => {
  expect(isBalanced('{[(test)]}')).toBe(true);
});

test('malformed string returns false', () => {
  expect(isBalanced('{[()]}]')).toBe(false);
});

test('empty string returns true', () => {
  expect(isBalanced('')).toBe(true);
});

test('string with only opening brackets returns false', () => {
  expect(isBalanced('(((')).toBe(false);
});

test('string with only closing brackets returns false', () => {
  expect(isBalanced(')))')).toBe(false);
});

test('string with mixed brackets returns false', () => {
  expect(isBalanced('{[(]}')).toBe(false);
});
```

This test suite covers a range of different input strings, including well-formed and malformed strings, empty strings, and strings
with only opening or closing brackets. You can add more test cases as needed to cover different edge cases.
