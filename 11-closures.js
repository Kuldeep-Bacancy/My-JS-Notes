/*
A closure is the combination of a function and the lexical environment within which that function was declared

The closure is a collection of all the variables in scope at the time of creation of the function.

Example 1

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init()

Example 2

function createCounter() {
  let counter = 0
  const myFunction = function() {
    counter = counter + 1
    return counter
   }
   return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

Example 3

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12


The way I will always remember closures is through the backpack analogy. When a function gets created and passed around or returned from another function, it carries a backpack with it. And in the backpack are all the variables that were in scope when the function was declared.




*/