/*
There are three ways to declare variables in JS:

var width = 100;
let height = 200;
const key = 'abc123';

var variable can be updated and reassinged.

var width = 100;
width;
It returns:
100
Reassign the variable and call it again:
width = 200;
width;
Returns:
200


var variables are function scoped in fuctions means we have define variable with var in function then it only available in function itself. you can't access that variable outside the function

but in scope(curly braces) it is diffrenet. The variable define with var in scope can access outside the scope.

Example:-

function setWidth(){
    var width = 100;
    console.log(width);
}
width;
// Returns:
Uncaught ReferenceError: width is not defined

var age = 100;
  if (age > 12){
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }
In the example above, the console returns:

100
You are 700 dog years old!
But if I call dogYears in the console in returns:

dogYears;
// returns:
700


So to avoid this type of behaviour we should use let and const variables because they are block scoped.

*/