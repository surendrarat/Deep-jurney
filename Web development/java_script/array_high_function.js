// by using the map for transform array 
// const nums=[2,4,35,2,4]

// console.log(nums.map(n => n * n))

const arr =[3,2,4,2,4,2];

const brr=arr.map(n => n +n);
console.log(brr);


// filter -its filter the condition


const arr2= [2,"ram" , 32,21,53]
const even=arr2.filter(n=>n%2===0)

console.log(even);

// * reduce it is important 
/*array.reduce((accumulator, currentValue) => {
     return updatedAccumulator;
 }, initialValue);
*/

const arr3=[3,4,53,52,7,8,6];

arr3.reduce((acc,curr) => {
    console.log(acc, curr); 
    return acc+curr;
  }, 0);

  const arr4 =[4,3,2,4,1];
  const p= arr4.reverse()
  console.log(arr4);
  

  const arr5 = [];
arr5[1000] = 5;
console.log(arr5)
