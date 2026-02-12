function outer(x) {
  return function inner(y) {
    console.log(x + y);
  };
}

const add5 = outer(5);
add5(3);

function counter() {
  let c = 0;
  return function () {
    return ++c;
  };
}

const count1 = counter();
console.log(count1());
console.log(count1());
