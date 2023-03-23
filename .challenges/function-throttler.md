
## Function throttler
![alt_text](images/js.png "image_tooltip")

Write a function that takes two arguments: a function and a number representing a time interval in milliseconds. The function should return a new function that can be called repeatedly, but will only invoke the original function once per time interval.

For example, given the following code:


```ts
var throttle = require('./throttle');

var sayHi = function() {
  console.log('hi');
};

var throttled = throttle(sayHi, 100);

throttled();
throttled();
throttled();
throttled();
```


The output should be two "hi" messages on the console, spaced 100 milliseconds apart.

Here are some unit tests:


```ts
describe("throttleFunction", () => {
  test("should return a function", () => {
    const throttledFn = throttleFunction(() => {}, 1000);
    expect(typeof throttledFn).toBe("function");
  });

  test("should invoke the original function once within the time interval", () => {
    const originalFn = jest.fn();
    const throttledFn = throttleFunction(originalFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();
    throttledFn();

    expect(originalFn).toHaveBeenCalledTimes(1);
  });

  test("should invoke the original function multiple times if time interval has elapsed", async () => {
    const originalFn = jest.fn();
    const throttledFn = throttleFunction(originalFn, 1000);

    throttledFn();
    await new Promise((resolve) => setTimeout(resolve, 1100));
    throttledFn();
    await new Promise((resolve) => setTimeout(resolve, 500));
    throttledFn();
    await new Promise((resolve) => setTimeout(resolve, 600));
    throttledFn();

    expect(originalFn).toHaveBeenCalledTimes(3);
  });
});
```