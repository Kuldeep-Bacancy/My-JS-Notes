/*
This keyword refers to current context.

- The this refers to the object in object methods.
- This alone denotes the global object.
- The global object is referred to by the this in a function.
- In a function, this is undefined in strict mode.
- In the case of an event, the element that received the event is referred to as this.
- call(), apply(), and bind() methods can all refer to any object using this.

There is no binding of this keyword in arrow functions.

In regular functions, the object that is called the function was represented by the this keyword.This object could be a window, document, button, or anything else in case of regular functions.

In normal arrow function, this refer to global context.

const myFunc = () => {
  console.log(this)
}

// call the function
myFunc()

notes:

- JavaScript's "this" keyword can be confusing for many and behaves differently in various scenarios.
- The behavior of the "this" keyword depends on the context, such as whether it's in a function, global space, or an arrow function.
- In the global space, the value of "this" is the global object, which can vary depending on the JavaScript runtime environment (e.g., window in browsers, Global in Node.js).
- Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
- JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode.
- Inside an object's method, "this" refers to the object itself where the method is called.
- "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
- It's essential to understand "call," "apply," and "bind" to effectively control the value of "this" in JavaScript methods.
- In global space, the 'this' keyword refers to the global object (e.g., 'window' in the browser).
- In strict mode, 'this' inside a function is undefined; in non-strict mode, it refers to the global object.
- Understanding "this" substitution: When 'this' is undefined or null inside a function, it becomes the global object.
- Inside an object's method, 'this' refers to the object itself.
- The 'call' method can be used to invoke a function with a specific 'this' context.
- Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context.
- In the context of DOM elements, 'this' refers to the specific HTML element being interacted with.


*/