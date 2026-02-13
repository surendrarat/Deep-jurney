// const obj = {
//   name: "Suru",
//   show() {
//     console.log(this.name);
//   }
// };

// const fn = obj.show;
// fn();


// const obj = {
//   name: "Suru",
//   show: () => {
//     console.log(this.name);
//   }
// };

// obj.show();

function test (){
    console.log(this);
}

test();