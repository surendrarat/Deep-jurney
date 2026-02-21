function bank(){
  let balance=10001;

  return function (){
    console.log(balance);
    
  }
}
const ammount=bank();
// console.log(bank());
bank();
ammount();

// -----------------------------------------------------------
function test (){
    let x=10;
    return function(){
        x++;
        console.log(x);
    }
}

const pass=test();
pass();
pass();
pass();


