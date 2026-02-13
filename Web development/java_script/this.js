// this is the keyword in js which is used for refer to the object that is calling the function 


// console.log(this)
// for normal function 
// function test(){
//     console.log(this)
// }
// test()

// for object

const how ={
    name :"suru",
     depend(){
        console.log(this.name);
        
    }
};

how.depend();


// Arrow functions do NOT have their own this.
// They inherit from outer scope.
const user = {
  name: "Suru",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.greet();
