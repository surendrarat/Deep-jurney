setTimeout(() => {
    console.log(`exicute after delay`);
}, 2000);

setTimeout(function (){
    console.log("exicute after 4 second delay");
} , 4000)

//---------------------------------------------------------

function processUserInput(callback){
    const name="suru";
    callback(name);
};

processUserInput(function(name){
    console.log("hello " +name)
})
