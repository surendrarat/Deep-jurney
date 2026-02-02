// for event handing we are using the closure 

function attachhandler(){
    let count =0;
    document.addEventListener("click" , function()
{
    count++;
    console.log(count)
}
);
}

attachhandler();