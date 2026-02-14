

function modify (arr){
    arr[0]=99;
}



let a =[1,2,4,2];
modify(a);
console.log(a);

//another example
function change(obj){
    obj.name="Ravi";
}

let user ={name:"suru"};
change(user);
console.log(user);