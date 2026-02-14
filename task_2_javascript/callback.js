// when we call the function inside the function then we call it is the callback 

// const { useCallback } = require("react")

// function myName(name){
//     console.log("hello",name)
// }

// function callMe(callback){
//     callback("suru")
// }

// callMe(name);

function square(x) {
  return x * x;
}

let a = 5;
let b = square(a);
console.log(b);

// function letgo(arr){
//         arr.push(300);
// }

// let x=[1,2,4,6,4,3];
// letgo(x)
// console.log(x);

function test (arr){
    arr=[2,3,2];
}
let some=[1,3,21];
test(some);
console.log(some)