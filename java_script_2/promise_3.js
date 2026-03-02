
// return new Promise(resolve => {
//   setTimeout(() => resolve(2), 0);
// });

// promise resolution procedure
/* 
when you return something form .then()
javascript runs an internal algorithm called 
promise resolution procedure
it decides how the next promise in the chain resolves
this is the core of promise chaining
the 4 critical cases when a .then() returns x 
the engine checks 
if x is a primitive
return 5;
then nextpromise resolves with 5
internally 
resolve (nextpromise,5)

if x is a promise
return promise.resolve(5)
then the next promise waits for it
it adopts its state.
if inner promise fulfills -if inner promise fulfulls outer fulfills
if inner rejects outer rejects.
this is called 
promise flattening

if x is thenable (very Advanced concept )
thenable =any oject with .then() method 
return {
then : function (resolve) {
resolve(10);
}
};
even though this is not a real promise
javascript will treat it like one 
it will call
x.then(resolve , reject)
this is called thenable assimilation
this is extremely important in interoperability between libraries

if x throws an error
throw new Error ("Fail")
next promise becomes rejected.
*/

// Promise.resolve().then(() => {throw "Error A"})
// .then(()=>{
//     console.log("won't run");
// })
// .catch(err=>{
//     console.log("Caught:" ,err);
// });

/* 
promise chain behaves like synchronous try / catch:
try{
step1();
step2();
step3();

}
catch(e) {
handleError();
}
but asynchonuous
*/

/* 
Async /Await Error internals 

*/

// async function test(){
//     throw "Error";
// }
// //Becomes:
// function test(){
//     return Promise.reject(Error)
// }
// async functions always return promises.

/*
unhandled Rejection
if a promise rejects and no .catch() handlesit 
In browser:
you get UnhandledPromisRejection warning.
In Node.js 
it may crash the process(depending on version)
No catch=dengerous
*/

Promise.resolve().then(() => {
    return Promise.reject("A")
})
.catch(err => {

console.log("Caught:" ,err);
return "B";
})
.then(value=>{
    console.log("Final: " , value);
});


// another trap question on promise resolve

Promise.resolve().then(()=> {
    throw "A"
})
.then( err => {
    console.log("caught: ",err);
})
.then(value=>{
    console.log("Final:", value);
});