console.log("start");

setTimeout(() => {
    console.log("Timeout")
}, 0);

console.log("End");

/*  
javascript is single threaded
one call stack , one thing executes at a time
no parallel execution in main thread
but 
it can still handle 
timers, API calls , Usr clicks , file reading
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