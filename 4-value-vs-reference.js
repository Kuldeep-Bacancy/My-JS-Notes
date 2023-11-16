/*
Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.

Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.


Primitive types

When we assign these variables to other variables using =, we copy the value to the new variable. They are copied by value.

var x = 10
var y = 20
var a = x
var b = y

Both a and x now contain 10. Both b and y now contain 'abc'. They’re separate, as the values themselves were copied.

Changing one does not change the other. Think of the variables as having no relationship to each other.

var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
console.log(x, y, a, b); // -> 10, 'abc', 5, 'def'

Non-primitive

Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value

When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over as if it were a primitive. Objects are copied by reference instead of by value.


var reference = [1];
var refCopy = reference;

Each variable now contains a reference to the same array. That means that if we alter reference, refCopy will see those changes:

reference.push(2);
console.log(reference, refCopy); // -> [1, 2], [1, 2]


== and ===

When the equality operators, == and ===, are used on reference-type variables, they check the reference. If the variables contain a reference to the same item, the comparison will result in true.

var arrRef = [’Hi!’];
var arrRef2 = arrRef;
console.log(arrRef === arrRef2); // -> true

If they’re distinct objects, even if they contain identical properties, the comparison will result in false.

var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2); // -> false

If we have two distinct objects and want to see if their properties are the same, the easiest way to do so is to turn them both into strings and then compare the strings. When the equality operators are comparing primitives, they simply check if the values are the same.

var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
console.log(arr1str === arr2str); // true

Another option would be to recursively loop through the objects and make sure each of the properties are the same.

*/