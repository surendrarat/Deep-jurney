// microtask explosion 
// every .then() create a microtask.
// long chains

for (let i = 0; i < 1000; i++) {
    Promise.resolve().then(() => { });
}

// create  10000 microtask this can starve macrotasks and delay redering this is called 'microtask starvation'

// task

Promise.resolve()
    .then(() => {
        console.log(1);
        return Promise.resolve(2);
    })
    .then(console.log)

console.log(3);