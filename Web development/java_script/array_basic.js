const arr=[23,43,1,4,22,211];

console.log(typeof(arr))
console.log(arr);
console.log(arr.length)

// array are store by the reference 
// a and b are pointed to the same memory
const a=[1,4,2,3];
const b=a;
b.push(13,3)
console.log(b);

// shallow copy

const h=[2,54,12,7,9];
const g=[...h]
// or  const g=h.slice();
g.push(2)
console.log(g);


