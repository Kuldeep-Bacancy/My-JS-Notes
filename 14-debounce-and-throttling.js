/*
Debouncing and throttling are techniques used in JavaScript to control the rate at which a function is executed, especially in scenarios where the function is triggered frequently, such as in response to user input like scrolling or typing. These techniques help improve performance and avoid unnecessary or excessive function calls.
*/

// Debounce:--------------------------------------------------------------

// Debouncing is a technique that ensures that a function is not called more often than a specified time interval, even if the triggering events occur rapidly.It is useful when you want to delay the execution of a function until a certain period of inactivity has passed.

// Basically Debounce stop your function execution till the delay you provide. if function called again in that time then it will reset previous timer and call function again!

// Here's a simple example using JavaScript:

function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const getDebounceData = () => {
  console.log("Debounce Hello World!", new Date().getTime() / 1000);
}

// Example usage:
const debouncedFunction = debounce(getDebounceData, 2000);

/*
- So we have defined function called debounce which will take parameters function and delay.
- We have defined variable called timer which will store timer of function we need to call after certain delay. it is useful when we need to reset our timer if function get called again.
- then we are returning a function(closure). In that we are clearing timer first then we are calling our function with setTimeout and also applying current context.
*/

// So whenever we call debounced function it will execute after certain time or specified delay

// Throttling:-------------------------------------------------------------------

// Throttling, on the other hand, ensures that a function is not called more often than a specified time interval, but it doesn't delay the first call. It limits the rate at which a function can be invoked.

// So Thortling make sure function does not called till certain time.

// Here's a simple example using JavaScript:

function throttle(func, delay) {
  let canRun = true;

  return function () {
    if (canRun) {
      func.apply(this, arguments);
      canRun = false;
      setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}

const getThrottleData = () => {
  console.log("Throttle Hello World!", new Date().getTime() / 1000);
}


// Example usage:
const throttledFunction = throttle(getThrottleData, 2000);

/*
- So we have defined function called throttle which will take parameters function and delay.
- We have set one boolean value as true which act as flag for when we need to call function
- then we are returning a function(closure). In that we are checking that is our flag is true then we are calling our function with setTimeout and also applying current context. after that we are setting value as false for our flag and setting timeout for ceratin delay after that our flag value become true!
*/

// in case of throtling function it will execute first time but after that it will execute after the delay you specified!



