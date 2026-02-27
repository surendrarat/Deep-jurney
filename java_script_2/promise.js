// promise is basically a state machine with reaction queue and what schedule microtask when resolve.
// any .then() handlers are scheduled as a microtask

const p=new Promise((resolve, reject) => {
    resolve(10);
})

// or

new Promise (()  =>{
    console.log("Inside")
})
console.log("Outside")


// what .then() really does


// p.then(callback);


 /* 
 internally -a new promise is created (let's call it p2)
 callback is stored inside p's reaction list.
 when p resolves:
 callback is scheduled as microtask.
 its return value resolves p2
 .then() always return a NEW promise 
 even if you don't return anything
 */
 const s1=Promise.resolve(5);
 const p2=s1.then(x=>x*2);

 // promise chain Mechanism (core engine logic)
 Promise.resolve(1).then(x=>x+1).then(x=>x+1).then(console.log);
 
 /*
 each step: waits for previous promise 
 wraps return value in Promise.resolve()
 passes it forward ---- this is called promise flattening
 
 Inside .then()
 primitive - wrapped in promise.resolve(value)
 promise - promise chainig waits for it 
 nothing - wrapped as Promise.resolve(undefined)
 throw error - Promise becomes rejected
 
 */