for (var i = 0; i <=3; i++) {   //it is have no block scope
    setTimeout(()=> console.log(i),1000);
}
for (let i = 0; i <=3; i++) {
    setTimeout(()=> console.log(i),1000);
}