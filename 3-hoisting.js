/* hoisting

In JS, the declarations are moved to the top of their scope and thus ensuring that we can use variables/functions before their declarations. This behavior of JS is called hoisting.

Normal functions are hoisted in JS but not arrow functions.

abc()
function abc(){
  console.log("Kuldeep");
}

you can't access let and const variables before initialization but you can access var variables. var variables has undefined value before initialization

ck()
const ck = () => {
  console.log("Nice one CK!")
}

console.log(a)
let a = "kuldeep"

console.log(b);
const b = "mital"

console.log(c)
var c ="kuldeep"


Note:- Functions are always hosted first then variables even though it has same name.

'use strict';

var num = 8;

function num() {
  return 10;
}

console.log(num); // output will be 8.

*/