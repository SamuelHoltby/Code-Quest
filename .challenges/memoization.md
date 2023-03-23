
## Memoization Function for Expensive Operations
![alt_text](images/js.png "image_tooltip")

Create a module that exports a function called memoize that takes a single argument, a function, and returns a new function that memoizes the original function's result.

The memoized function should cache the result of the original function and return the cached result when called with the same arguments. If the memoized function is called with different arguments, it should call the original function with those arguments and cache the result.

For example, given the following code:


```ts
var memoize = require('./memoize');

function expensiveOperation() {
  console.log('this should be shown once');
  return 22;
}

var memoized = memoize(expensiveOperation);
console.log(memoized());
console.log(memoized());
```


The output should be as indicated in the comments.

To complete this challenge, you'll need to use an object to store the cached results and the arguments that generated them.

You can test your implementation with different functions and arguments to make sure it works correctly. Keep in mind that memoization can improve performance, but may also consume memory, so use it judiciously.

Here are some unit tests:


```ts
describe('memoize function', () => {
  const memoize = require('./memoize');

  test('returns a function', () => {
    expect(typeof memoize(() => {})).toBe('function');
  });

  test('memoized function caches result of original function', () => {
    const originalFn = jest.fn().mockReturnValue('result');
    const memoizedFn = memoize(originalFn);

    memoizedFn('arg1', 'arg2');
    memoizedFn('arg1', 'arg2');

    expect(originalFn).toHaveBeenCalledTimes(1);
    expect(memoizedFn('arg1', 'arg2')).toBe('result');
    expect(originalFn).toHaveBeenCalledTimes(1);
  });

  test('memoized function calls original function with different arguments', () => {
    const originalFn = jest.fn().mockReturnValue('result');
    const memoizedFn = memoize(originalFn);

    memoizedFn('arg1');
    memoizedFn('arg2');

    expect(originalFn).toHaveBeenCalledTimes(2);
    expect(memoizedFn('arg1')).toBe('result');
    expect(memoizedFn('arg2')).toBe('result');
  });
});
```