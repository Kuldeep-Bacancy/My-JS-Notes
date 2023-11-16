// Promise is object which represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states pending, fulfiled and rejected.

// On fulfiled it will call resolve and on rejected it will call reject()

// const wait = (time) => { 
//   return new Promise((resolve,reject) => {
//     if(time >= 3000){
//       setTimeout(resolve, time) 
//     } else {
//       setTimeout(reject, time) 
//     }
//   });
// }

// wait(4000)
// .then(() => console.log('Hello! Success!'))
// .catch(() => console.log("Hello! Failed!")); 

/*
Promises following the spec must follow a specific set of rules:

- A promise or “thenable” is an object that supplies a standard-compliant .then() method.
- A pending promise may transition into a fulfilled or rejected state.
- A fulfilled or rejected promise is settled, and must not transition into any other state.
- Once a promise is settled, it must have a value (which may be undefined). That value must not change.
*/


// You can chain promises.

// new Promise(function (resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function (result) { // (**)

//   console.log(result); // 1
//   return result * 2;

// }).then(function (result) { // (***)

//   console.log(result); // 2
//   return result * 2;

// }).then(function (result) {

//   console.log(result) // 4
//   return result * 2;

// });


// async and await is syntactic sugar to use promises. Basically it executes your asynchronous code in synchronous manner.
// async function always return promise


// async function showAvatar() {

//   // read our JSON
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// a promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('Promise resolved')
//   }, 4000);
// });

// // async function
// async function asyncFunc() {
//   try {
//     // wait until the promise resolves 
//     console.log("waiting for resove");
//     let result = await promise;
//     console.log("Hello Ck!");

//     console.log(result);
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// // calling the async function
// asyncFunc(); // Promise resolved



// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello!, I am Promise 1!")
//   }, 10000);
// })

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello!, I am Promise 2!")
//   }, 5000);
// })


// const getData = () => {
//   promise1.then((res) => console.log(res))
//   console.log("Hello I am old Promise resolver!");
// }

// const newGetData = async () => {
//   const val = await promise2;
//   console.log("Hello I am new Promise resolver!");
//   console.log(val)
// }

// getData();
// console.log("Hey I am first!");
// newGetData();
// console.log("Hey I am second!");


// if then keyword throw error then other then will be ignored



// Promise.resolve(1)
// .then(x => { throw x })
// .then(x => console.log(`then ${x}`))
// .catch(err => console.log(`error ${err}`))
// .then(() => Promise.resolve(2))
// .catch(err => console.log(`error ${err}`))
// .then(x => console.log(`then ${x}`));
