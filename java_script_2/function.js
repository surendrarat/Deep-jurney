// basic declaraction of the function

// function goa(name){
// return "hello " + name;
// }
 
// let suru='what is your name';
// let x=goa(suru);

// console.log(x)
// let a=suru;
// console.log(goa());


// arrow function
const water=(a,b) =>{
    return a+b;
}

// short form
const fire=(x,y,w)=>x+y+w;

console.log(fire(3,54,34))
console.log(water(32,5));

// default parameter 
function greet(name="suru"){
    return 'hello ' +name;
}

greet();
console.log(greet())

// Rest parameter
function run(...number){
    return number.reduce((a,b)=>a+b,0);
}

let y=run(2,3,5,43,3);
console.log(y);

// callback when a functin pass form another function 
function process(callback){
    callback();
}

process(function(){
    console.log("hello")
})
