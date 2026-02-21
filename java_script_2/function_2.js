var a = 10;

function outer() {
  var a = 20;
inner();
  function inner() {
    console.log(a);
  }
}

outer();
