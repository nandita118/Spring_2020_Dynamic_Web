const express = require('express') //object (essentially everything in js is an object -- has depth, types, etc)

const app = express(); //object -- app is the output of function express() -- creating an instance of package express
const port = process.env.PORT || 4000; //number variable

//app.get('/', (req, res) => res.send("Hello World")); //function being called - flow of files matter

const indexRoute = require('./routes/index.js');
//const aboutRoute = require('./routes/about.js');

// Serve Static Files -- should be as high as possible
app.use("/static", express.static("public"));
// Routing in Express
app.use("/", indexRoute);
//app.use("/about", aboutRoute);

//always put this at the bottom --> 
app.listen(port,  () => console.log("Final API Running!")); //function being called