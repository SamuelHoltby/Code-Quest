Write a JavaScript function that, given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money, returns the fewest number of coins needed to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example:

Input: coins = [1, 4, 5], amount = 8
Output: 2

Here are some Jest tests:
```ts
const coinChange = require('./coinChange');

describe('Coin Change Problem', () => {
  test('Test case 1: coins = [1, 4, 5], amount = 8', () => {
    expect(coinChange([1, 4, 5], 8)).toBe(2);
  });

  test('Test case 2: coins = [2], amount = 3', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  test('Test case 3: coins = [1, 2, 5], amount = 11', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  test('Test case 4: coins = [83, 186, 408, 419], amount = 6249', () => {
    expect(coinChange([83, 186, 408, 419], 6249)).toBe(20);
  });

  test('Test case 5: coins = [3, 5, 7], amount = 0', () => {
    expect(coinChange([3, 5, 7], 0)).toBe(0);
  });

  test('Test case 6: coins = [186, 419, 83, 408], amount = 6249', () => {
    expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
  });
});
```

This Jest test file includes several test cases for the Coin Change problem, including the provided example as well as additional edge cases and random cases. Make sure to have the coinChange function in a separate file (e.g., coinChange.js) and require it at the beginning of the test file. To run the tests, simply use the command npm test or yarn test in your terminal, assuming you have the Jest testing framework set up in your project.
