## Bitwise Operators
![alt_text](images/js.png "image_tooltip")

Write a function that takes two integers as input and returns the bitwise **AND** of all the integers between those two integers, inclusive.

For example, given the input integers 5 and 7, the function should return the result of the bitwise AND operation between 5 and 6 and 7, which is 5. In binary form, this is:


```
5:  0b101
6:  0b110
7:  0b111
AND result: 0b100 (4 in decimal)
```


\
To complete this task, you'll need to use the bitwise AND operator (&) in a loop to compute the AND of each integer between the two input integers. Here's a skeleton implementation to get you started:


```
function bitwiseAndInRange(start, end) {
  let result = start;
  for (let i = start + 1; i <= end; i++) {
    // perform the bitwise AND operation between result and i here
    // update the result variable accordingly
  }
  return result;
}
```


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

