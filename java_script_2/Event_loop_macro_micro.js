
// Rules Reminder (No Guessing)

// Synchronous runs first.

// Then ALL microtasks.

// Then ONE macrotask.

// After macrotask → empty microtasks again.

// Macrotasks are FIFO.

// Microtasks have higher priority than macrotasks.



console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("D");

  setTimeout(() => {
    console.log("E");
  }, 0);

  Promise.resolve().then(() => {
    console.log("F");
  });
});

console.log("G");

/*  
Think Like Engine

Don’t rush.

Use this structure:

Step 1: Sync phase output?
Step 2: Microtask queue content?
Step 3: Macrotask queue content?
Step 4: What runs next?
Step 5: Does any task schedule new microtasks?
Step 6: Repeat.
*/