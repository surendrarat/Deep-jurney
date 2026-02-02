// function who use the its outer function variable after its exicution end lexical environment

function outer(){

    let count =0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const fn=outer();
fn();
fn();
fn();