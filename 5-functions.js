/*

Define a Function.

There are a few different ways to define a function in JavaScript:

A Function Declaration defines a named function. To create a function declaration you use the function keyword followed by the name of the function. When using function declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.

function name(parameters){
  statements
}

A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name. Function Expressions are not hoisted, and therefore cannot be used before they are defined. In the example below, we are setting the anonymous function object equal to a variable.

let name = function(parameters){
  statements
}

An Arrow Function Expression is a shorter syntax for writing function expressions. Arrow functions do not create their own this value.

let name = (parameters) => {
  statements
}

Function expressions can have names. The most boring and universally explained usage of these named function expressions is with recursion. Don’t worry much about these now as you can master IIFE without understanding named function expressions.

var fibo = function fibonacci() {
    // you can use "fibonacci()" here as this funciton expression has a name.
};

// fibonacci() here fails, but fibo() works.
-

What is Pure function in JS?

A pure function is a function which:

Given the same input, will always return the same output.
Produces no side effects.

function calculateGST(productPrice) {
    return productPrice * 0.05;
}
console.log(calculateGST(15))

The above function will always return the same result if we pass the same product price. In other words, its output doesn’t get affected by any other values/state changes. So we can call the “calculate GST” function a Pure Function.

Now, let’s see one more function below:

let tax = 20;
function calculateGST(productPrice) {
    return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15))

Pause a second and can you guess whether the above function is Pure or not?

If you guessed that it isn’t, you are right! It is not a pure function as the output is dependent on an external variable “tax”. So if the tax value is updated somehow, then we will get a different output though we pass the same productPrice as a parameter to the function.

Note: If a pure function calls a pure function, this isn’t a side effect, and the calling function is still considered pure. (Example: using Math.max() inside a function)

Below are some side effects (but not limited to) that a function should not produce in order to be considered a pure function –

- Making an HTTP request
- Mutating data
- Printing to a screen or console
- DOM Query/Manipulation
- Math.random()
- Getting the current time

*/