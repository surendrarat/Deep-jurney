// constructor function

function person(make){
    this.make=make;
}

const p1=new person("happy");
console.log(p1.make)

// call(), apply(), bind()- control the this manually

function greet(){
    console.log(this.name)
}

const user={ name:"codemaker"}

greet.call(user)

const bound=greet.bind(user);
bound();