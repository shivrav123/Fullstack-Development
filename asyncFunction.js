//async keyword

// async function greet() {
//     // throw "some weak connection";
//     return "hello";  //returns a promise
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was:", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with error: ", err);
// });



//await function

// function getNumber() {
//     return new Promise ((resolove, reject) => {
//         setTimeout(() => {   //async function
//         let num = Math.floor(Math.random() * 10) + 1;
//         console.log(num);
//         resolove();
//         }, 2000);
//     })
// }

// async function demo() {
//     await getNumber();
//     await getNumber();
//     await getNumber();
//     getNumber();
// }



//change color

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function demo() {
//    await changeColor("red", 1000);
//    await changeColor("green", 1000);
//    await changeColor("blue", 1000);
//    await changeColor("yellow", 1000);
//    await changeColor("pink", 1000);
// }



//Handling Rejections

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3) {
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function demo() {
//    try {
//    await changeColor("red", 1000);
//    await changeColor("green", 1000);
//    await changeColor("blue", 1000);
//    await changeColor("yellow", 1000);
//    await changeColor("pink", 1000);
//    } catch(err) {
//     console.log("error caught");
//     console.log(err);
//    }

//    let a = 3;
//    console.log(a);
//    console.log("new number is ", a+3);
// }



//Api request (works asyncronously) (then and catch)

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log(data2);
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log(err);
// });

// console.log("i am happy");



//Api request (works asyncronously) (async and await)

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
    
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (error) {
//         console.log(error);
//     }

//     console.log("bye");
// }



//using axios

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data);
//         console.log(res.data.fact);
//     } catch(err) {
//         console.log(err);
//     }

//     console.log("hello");
// }



//get cat facts

// let btn = document.querySelector("button");
// let facts = document.querySelector("#facts");


// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     facts.textContent = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(err) {
//         console.log("the error is ", err);
//         return "no fact found";
//     }
// }



