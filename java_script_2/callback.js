// A function passed as a argument to another function to be exicute later

/* why callback exist 
because javascript -is single threaded ,executes one task at a time
but must handle :
Timer, API calls , Events , User clicks, file reading 
so instead of blocking exicution , it schedules tasks .
callbacks are the mechanism 
*/

function CEO(name , callback){
    console.log("hello " +name)
    callback();
}

function manager(){
    console.log("Goodbye!")
}

CEO("surma" , manager)

// --------------------------------------------------------------

function calculater(a,b,operation){

return operation(a,b);
}

function add(a,b){
    return a+b;
}

function multipler(a,b){
    return a*b;
}

console.log(calculater(2,4,add));
console.log(calculater(225,4462,multipler));