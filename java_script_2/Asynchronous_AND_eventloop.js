// console.log("start");

// setTimeout(() => {
//     console.log("Timeout")
// }, 0);

// console.log("End");
// console.log("\n\n")
/*  
javascript is single threaded
one call stack , one thing executes at a time
no parallel execution in main thread
but 
it can still handle 
timers, API calls , User clicks , file reading
how 
because of the Event loop Architechture

javascript Runtime Architechture
there are 5 important components 
call stack 
web APIs (Browser)
Callback queue
microtask queue
Event loop
*/

// this is second example
// promise (microtasks ) vs macrotask(setTimeout)
console.log("start");

setTimeout(() => {
    console.log("Timeout")
}, 0);

Promise.resolve().then(() => console.log("Promise"));;

console.log("End");

// microtask run before macrotasks
// macrotasks- setInterval,setTimeout,DOM Event,setImmediate (Node) these are going into macrotasks queue or callback queue


/*What is Microtask?

Examples:
Promise.then()
Promise.catch()
queueMicrotask()
MutationObserver
These go to:
👉 Microtask Queue
Microtasks have higher priority. */

// this is third example
// microtask can genete mote microtask
// Microtasks completely drain before macrotasks run.

// This is why Promises feel “faster” than setTimeout.

// console.log("\n");

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   Promise.resolve().then(() => console.log("D"));
// });

// console.log("E");