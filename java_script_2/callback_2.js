setTimeout(() => {
    console.log(`exicute after delay`);
}, 2000);

setTimeout(function () {
    console.log("exicute after 4 second delay");
}, 4000)

//---------------------------------------------------------

function processUserInput(callback) {
    const name = "suru";
    callback(name);
};

processUserInput(function (name) {
    console.log("hello " + name)
})


//-----------------------------------------------
function middleware1(req, next) {
    console.log("Middleware 1");
    req.user = "Suru";
    next();
}

function middleware2(req, next) {
    console.log("MIddleware 2");
    req.auth = true;
    next();
}

function finalHandler(req) {
    console.log("Final Handler");
    console.log(req);
}
function runmiddlewares(req, Middleware, finalHandler) {

    let index = 0;


    function next() {
        if (index < Middleware.length) {
            const current = Middleware[index];
            index++;
            current(req, next);

        }
        else {
            finalHandler(req);
        }
    }
    next();
}


runmiddlewares({}, [middleware1, middleware2], finalHandler);


//-------------------------------------------------------------------

function myMap(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const numbers = [1, 2, 3];
const doubled = myMap(numbers, function (value) {
    return value * 2;
});
console.log(doubled);