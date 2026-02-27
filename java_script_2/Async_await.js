console.log("start")

async function burd() {
    console.log("1")
    await Promise.resolve();
    console.log(2);
}

setTimeout(() => console.log(3),0);

burd();
Promise.resolve().then(() => console.log(4));

console.log(5);