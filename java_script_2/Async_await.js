// console.log("start")

// async function burd() {
//     console.log("1")
//     await Promise.resolve();
//     console.log(2);
// }

// setTimeout(() => console.log(3),0);

// burd();
// Promise.resolve().then(() => console.log(4));

// console.log(5);

// use try and catch inside async and await for error handling
// async always retrun a promis
 async function getuserinfo(){
    try{
    // get user info
  const getuser= await fetch('https://api.example.com/user');

  // The code pauses HERE until the data is converted to JSON
  const data = await Response.json(data);

  console.log("2. Data received:", data);
    }
    catch(error){
        console.log("the error is :", error)
    }
}

async function fetchUserData() {
  console.log("1. Starting to fetch data...");

  // The code pauses HERE until the network request finishes
  const response = await fetch('https://api.example.com/user'); 
  
  // The code pauses HERE until the data is converted to JSON
  const data = await response.json(); 

  console.log("2. Data received:", data);
}

fetchUserData();
console.log("3. Doing other things while we wait...");