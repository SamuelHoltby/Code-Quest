
## Recursive Function Value Resolver
![alt_text](images/js.png "image_tooltip")

Create a module that exports a function called value that takes a single argument and returns the value of that argument, unless the argument is a function, in which case the value function should call the function and return its value.

In addition, the value function should be able to handle functions that return other functions, and should call those functions recursively until it reaches a non-function value.

For example, given the following code:


```js
var value = require('./') // <- this is the file you make;

var scalar = 'foo';
var fn = function() { return 'bar'; };
var fnTwice = function() {
  return fn;
};
var fnThrice = function() {
  return fnTwice;
};

var whoa = function() {
  return function() {
    return function() {
      return function() {
        return function() {
          return function() {
            return function() {
              return function() {
                return function() {
                  return 'hi';
                };
              };
            };
          };
        };
      };
    };
  };
};

value(scalar);   // should be      'foo'
value(fn);       // should be      'bar'
value(fnTwice);  // should also be 'bar'
value(fnThrice); // should also be 'bar'

value(whoa);     // should be      'hi'
```


Here are some unit tests:


```ts
describe('Weekly challenge - Recursive Function Value Resolver', () => {

  it('should return the input value if not a function', () => {
    const val = value(5);
    expect(val).toBe(5);
  });

  it('should call the function and return its value if the input is a function', () => {
    const fn = jest.fn(() => 42);
    const val = value(fn);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(val).toBe(42);
  });

  it('should handle functions that return other functions', () => {
    const fn1 = jest.fn(() => () => 42);
    const fn2 = jest.fn(() => fn1);
    const val = value(fn2);
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(val).toBe(42);
  });

  it('should handle deeply nested functions', () => {
    const fn1 = jest.fn(() => () => () => 42);
    const fn2 = jest.fn(() => fn1);
    const val = value(fn2);
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(val).toBe(42);
  });

});
```
