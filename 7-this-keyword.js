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


*/