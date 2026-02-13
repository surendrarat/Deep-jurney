// function counter(){
//     let count=0;
//     return function (){
//        return ++count;
//     };
// }

// const count1=counter();
// console.log(count1())
// console.log(count1())

function outer(x) {
  return function inner(y) {
    console.log(x + y);
  };
}

const add5 = outer(5);
add5(3);
