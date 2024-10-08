//(1)express listen the api request from the client site(frontend)

// const express = require("express");
// const app = express();

// // console.dir(app);
// let port = 3000;  //8080
// app.listen(port, () => {
//     console.log(`app is listening on the port ${port}`);
// });

// app.use((req, res) => {
//     console.log("request received.");
// });


//express convert the text http request into an object
// app.use((req, res) => {
//     console.log(req);
// });


//response send
// app.use((req, res) => {
//     console.log("request received");
//     // res.send("this is a basic respond");
    
//     // res.send({
//     //     name: "john",
//     //     age: 30,
//     // });

//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>banana</li>";
//     res.send(code);
// });




//app.get()  (routing or path)

// app.get("/", (req, res) => {
//     res.send("you contacted root path.");
// });

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// //if any other request except above then this custom response
// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });


// //app.post
// app.post("/", (req, res) => {
//     res.send("you contacted post method");
// });





//(2)path parameters

// const express = require("express");
// const app = express();
// // console.dir(app);

// let port = 3000;
// app.listen(port, () => {
//     console.log(`app is listening on the port ${port}`);
// });

// //1
// app.get("/", (req, res) => {
//     console.log(req.params);   //params = parameter of path(variable) by the client
//     res.send("hello, i am root");
// });

// //2
// app.get("/:username", (req, res) => {
//     console.log(req.params);  //params = parameters
//     res.send(`hello, i am root ${port}`);
// });

// //3
// // app.get("/:username/:id", (req, res) => {
// //     console.log(req.params);
// //     res.send(`hello, i am root ${port}`);
// // });

// //4
// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`welcome to the page of @${username}`);
// })




//(3)Query Strings

const express = require("express");
const app = express();

let port = 3000;
app.listen(port, (req, res) => {
    console.log(`app is listening on the port ${port}`);
});

// //query(1)
// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no result");
// });

//query(2)
app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});