
// const arr=[2,3]

// function reverseArray(arr){
//     let left =0;
//     let right =arr.lenght-1;

//     while (left < right ){
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--;
//     };
//     return arr;
// }
// console.log(reverseArray(arr))

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
let arr=[1,2,4,3,5,2]

console.log(reverseArray(arr));