const express = require('express') //object (essentially everything in js is an object -- has depth, types, etc)

const app = express(); //object -- app is the output of function express() -- creating an instance of package express
const port = 4000; //number variable

app.get('/', (req, res) => res.send("Hello World")); //function being called

app.listen(port,  () => console.log("Hello World Running")); //function being called