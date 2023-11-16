// Using Call we can borrow functions. Do not use arrow functions because arrow function don't have this.

console.log("Call----------------------------------")
const greeting = function (hometown) {
  console.log(`Hello ${this.firstName} ${this.lastName} from ${hometown}`);
}

const obj = {
  firstName: "Kuldeep",
  lastName: "Chotaliya"
}

greeting.call(obj, "Navsari");

const obj2 = {
  firstName: "Sam",
  lastName: "Choudhary"
}

greeting.call(obj2, "Indore")


// Apply have same use case but it only diff is argument passing. We need to use array when use Apply and pass args.
console.log("Apply----------------------------------")
greeting.apply(obj, ["Navsari"])
greeting.apply(obj2, ["Indore"])


// Bind will bind method to our object and return us a method which can be call later.

console.log("Bind----------------------------------")
const newGreerting = greeting.bind(obj, "Navsari")
newGreerting();
const obj2Greeting = greeting.bind(obj2, "Indore")
obj2Greeting()