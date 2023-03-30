# Code-Quest

This repository is a collection of various JavaScript challenges aimed at improving and testing one's knowledge of the language.
It serves as a playground for practicing and refining JavaScript skills while also demonstrating the power of unit testing using
Jest, a popular testing library for JavaScript.

I'll post a **new coding challenge each week**, see below. These challenges should only take 10-30 minutes to complete, as I ain't got no time
for hour long challenges.

Here are all the challenges if you fancy having a look: [All challenges](.challenges/Challenges.md).

My attempt at each challenge can be found within [`src/weekly-challenges.test.ts`](src/weekly-challenges.test.ts)


## 31/03/2023 - weekly challenge
## Bitwise Operators
![alt_text](.challenges/images/js.png "image_tooltip")

Write a function that takes two integers as input and returns the bitwise **AND** of all the integers between those two integers, inclusive.

For example, given the input integers 5 and 7, the function should return the result of the bitwise AND operation between 5 and 6 and 7, which is 5. In binary form, this is:


```
5:  0b101
6:  0b110
7:  0b111
AND result: 0b100 (4 in decimal)
```


\
To complete this task, you'll need to use the bitwise AND operator (&) in a loop to compute the AND of each integer between the two input integers.

You can test your implementation with different input values to make sure it works correctly. Keep in mind that bitwise operators can be tricky to work with, so take your time and double-check your code.

Here are some unit tests to pass:


```
describe('bitwiseAndInRange', () => {
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
```

