// when a inner function is using it outer function lexical scope even it's exicution is completed. 


function outer() {
    let count =0;

    function inner(){
        count++;
        console.log(count);
        
    }
    return inner;
}

const counter= outer();

counter();
counter();
counter();

function grond(){
    let snad=10;
// console.log(snad);

    return function (){
        console.log(snad);
    }
}

const fun=grond();

grond();
fun();